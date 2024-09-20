import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { map, Observable, of, startWith } from 'rxjs';
import { Municipio } from '@models/municipio.model';
import { PrevisionMunicipio } from '@models/prevision-municipio.model';
import { AemetService } from '../../common/services/api/aemet/aemet.service';
import { BusquedaPrevision } from '@models/busqueda-prevision.model';
import { UnidadTemperatura } from '@models/unidad-temperatura.model';
import { StringUtils } from '../../common/utils/string-utils';

@Component({
  selector: 'app-search-pevision',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSelectModule,
    AsyncPipe,
  ],
  templateUrl: './search-pevision.component.html',
  styleUrl: './search-pevision.component.scss'
})
export class SearchPevisionComponent implements OnInit{

  @Output() seachAction: EventEmitter<BusquedaPrevision> = new EventEmitter();

  opcionesMunicipio: Municipio[] = [];
  filteredOptions: Observable<Municipio[]> = of([]);
  previsionMunicipio: PrevisionMunicipio | undefined = undefined;

  unidadesTemperatura: UnidadTemperatura[] = [
    { value: '', viewValue: 'Selecciona una opción' },
    { value: 'G_CEL', viewValue: 'Grados Celsius' },
    { value: 'G_FAH', viewValue: 'Grados Fahrenheit' },
  ];

  formularioPrevision: FormGroup;

  private formBuilder = inject(FormBuilder);
  private aemetService = inject(AemetService);

  constructor () {
    this.formularioPrevision = this.formBuilder.group({
      nombreMunicipioControl: new FormControl<string | Municipio>(''),
      unidadTemperaturaControl: new FormControl<string>('')
    });
  }

  ngOnInit(): void {
    this.obtenerMunicipios();
    this.initializeMunicipioFilter();
  }

  private initializeMunicipioFilter() {
    this.filteredOptions = this.nombreMunicipioControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value.nombre;
        return name ? this._filter(name as string) : this.opcionesMunicipio.slice();
      }),
    );
  }
  
  private obtenerMunicipios():void {
    this.aemetService.getMunicipios().subscribe(responseMunicipios => {
      this.opcionesMunicipio = responseMunicipios;
    });
  }

  onMunicipioSelected(event: MatAutocompleteSelectedEvent): void {
    this.seachAction.emit({
      id: event.option.value.id, 
      unidadTemperatura: this.temperaturaSeleccionada
    });
  }

  onUnidadTemperaturaSelected(event: MatSelectChange): void {
    if (this.municipioSeleccionado != null)
      this.seachAction.emit({
        id: this.municipioSeleccionado.id, 
        unidadTemperatura: event.value,
      });
  }
  
  displayFn(municipio: Municipio): string {
    return municipio && municipio.nombre ? municipio.nombre : '';
  }

  private _filter(name: string): Municipio[] {
    const filterValue = StringUtils.removeAccents(name.toLowerCase());
    return this.opcionesMunicipio.filter(municipio => 
      StringUtils.removeAccents(municipio.nombre.toLowerCase()).includes(filterValue)
    );
  }

  get nombreMunicipioControl() {
    return this.formularioPrevision.get('nombreMunicipioControl') as FormControl<string | Municipio>;
  }

  get municipioSeleccionado(): Municipio | null {
    const controlValue = this.nombreMunicipioControl.value;
    return typeof controlValue === 'object' && controlValue !== null ? controlValue as Municipio : null;
  }
  
  get temperaturaSeleccionada(): string {
    return this.unidadTemperaturaControl.value;
  }

  get unidadTemperaturaControl() {
    return this.formularioPrevision.get('unidadTemperaturaControl') as FormControl<string>;
  }

}