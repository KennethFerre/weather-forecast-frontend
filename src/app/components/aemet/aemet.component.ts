import { Component, inject } from '@angular/core';
import { SpinnerComponent } from '../spinner/spinner.component';
import { SearchPevisionComponent } from '../search-pevision/search-pevision.component';
import { PrevisionComponent } from '../prevision/prevision.component';
import { AemetService } from '../../common/services/api/aemet/aemet.service';
import { BusquedaPrevision } from '@models/busqueda-prevision.model';
import { PrevisionMunicipio } from '@models/prevision-municipio.model';

@Component({
  selector: 'app-aemet',
  standalone: true,
  imports: [
    SpinnerComponent,
    SearchPevisionComponent,
    PrevisionComponent,
  ],
  templateUrl: './aemet.component.html',
  styleUrl: './aemet.component.scss'
})
export class AemetComponent {

  //#region services
  private aemetService = inject(AemetService);
  //#endregion

  title = 'Interfaz de previsión meteorológica';
  previsionMunicipio: PrevisionMunicipio | undefined = undefined;

  private obtenerPrediccion(idMunicipio: string, unidadTemperatura?: string) {
    this.aemetService.prediccionMunicipio(idMunicipio, unidadTemperatura).subscribe(respuestaPrevision => {
      this.previsionMunicipio = respuestaPrevision;
    });
  }

  public seachAction(event: BusquedaPrevision) {
    this.obtenerPrediccion(event.id, event.unidadTemperatura)
  }

}