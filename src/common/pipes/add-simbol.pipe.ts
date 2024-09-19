import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'symbol',
  standalone: true
})
export class SymbolPipe implements PipeTransform {

  transform(value: string, simbol: string): string {
    return `${value} ${simbol}`;
  }
  
}