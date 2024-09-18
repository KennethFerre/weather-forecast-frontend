import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlockUIService {

  //#region Variables
  public readonly loading$ = new BehaviorSubject<number>(0);
  //#endregion

  public show() {
    const valor = this.loading$.getValue();
    this.loading$.next(valor + 1);
  }

  public hide() {
    const valor = this.loading$.getValue();
    this.loading$.next(valor <= 0 ? 0 : valor -1);
  }

  public kill() {
    this.loading$.next(0);
  }
}