import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { PrevisionMunicipio } from '@models/prevision-municipio.model';
import { SimbolTemperaturePipe } from '@pipes/simbol-temperature.pipe';
import { SymbolPipe } from '@pipes/add-simbol.pipe';
import { TruncateNumberPipe } from '@pipes/truncate-number.pipe';
import { CapitalizePipe } from '@pipes/capitalize-first-letter.pipe';

@Component({
  selector: 'app-prevision',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    SimbolTemperaturePipe,
    SymbolPipe,
    TruncateNumberPipe,
    CapitalizePipe
  ],
  templateUrl: './prevision.component.html',
  styleUrl: './prevision.component.scss'
})
export class PrevisionComponent {

  @Input() previsionMunicipio: PrevisionMunicipio | undefined = undefined;

  public obtenerPeriodoFormateado(periodo: string): string {
    if (!periodo)
      return '-';
    const mitad = Math.floor(periodo.length / 2)
    return `${periodo.substring(0, mitad)}-${periodo.substring(mitad)}`;
  }

}