import { HttpErrorResponse, HttpEvent, HttpEventType, HttpHandlerFn, HttpRequest, HttpResponse } from '@angular/common/http';
import { catchError, EMPTY, mergeMap, Observable, of } from 'rxjs';

export const errorInterceptor = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
    return next(req).pipe(
        catchError((error: HttpErrorResponse) => {
            console.error(`Url: ${req.url} Error HTTP: ${error.status}. ${error.message}`)
            window.alert('UPS! Parece que algo ha fallado, refresque el navegador. Si el problema persiste, contacte con el administrador.');
            return EMPTY;
        })
    );
}