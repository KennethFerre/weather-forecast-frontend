import { HttpEvent, HttpEventType, HttpHandlerFn, HttpRequest, HttpResponse } from '@angular/common/http';
import { EMPTY, mergeMap, Observable, of } from 'rxjs';

export const aemetErrorInterceptor = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
    return next(req).pipe(
        mergeMap((event: HttpEvent<unknown>) => {
            if (event.type === HttpEventType.Response) {
                const response = event as HttpResponse<any>;
                if (response?.body?.httpStatus !== undefined) {
                    window.alert(response.body.mensaje);
                    return of(EMPTY as unknown as HttpEvent<unknown>);
                }
                return of(response);
            }
            return of(event);
        })
    );
}