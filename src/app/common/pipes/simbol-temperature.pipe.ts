import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature',
  standalone: true
})
export class SimbolTemperaturePipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'G_CEL':
        return 'ºC';
      case 'G_FAH':
        return 'ºF';
      default:
        return '';
    }
  }
}
