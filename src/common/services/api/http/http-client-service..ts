import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { finalize, Observable, tap } from 'rxjs';
import { BlockUIService } from '../../ui/block-ui.service';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  private httpClient = inject(HttpClient);
  private blockUIService = inject(BlockUIService);

  public get<T>(
    url: string,
    mostrarLoading = true,
  ): Observable<T> {
    let peticion = this.httpClient.get<T>(url);
    return this.gestionarRequest(peticion, mostrarLoading);
  }
  
  private gestionarRequest<T>(request: Observable<T>, blockUi: boolean) {
    return request.pipe(
      tap({
        subscribe: () => {
          if (blockUi) this.blockUIService.show();
        }
      }),
      finalize(() => {
        if (blockUi) this.blockUIService.hide();
      })
    );
  }
}