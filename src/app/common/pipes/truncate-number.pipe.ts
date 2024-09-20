import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateNumber',
  standalone: true
})
export class TruncateNumberPipe implements PipeTransform {

  transform(value: number , decimalPlaces: number = 1): number {
    if (isNaN(value)) return value;
    const factor = Math.pow(10, decimalPlaces);
    return Math.floor(value * factor) / factor;
  }
  
}