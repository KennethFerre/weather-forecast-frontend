import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientService } from '../http/http-client-service.';
import { Municipio } from '@models/municipio.model';
import { PrevisionMunicipio } from '@models/prevision-municipio.model';
import { environment } from '@environments/environment';
import { QueryParamsUtils } from '../../../utils/query-params-util';

@Injectable({
  providedIn: 'root'
})
export class AemetService {

  private readonly MUNICIPIOS_PATH = '/municipios';
  private readonly PREVISION_MUNICIPIO_PATH = '/prevision/municipio';
  private readonly ID_MUNICIPIO_PARAM_NOMBRE = 'id';
  private readonly UNIDAD_TEMPERATURA_PARAM_NOMBRE = 'unidad';

  private httpClient = inject(HttpClientService);

  public getMunicipios(): Observable<Municipio[]> {
    const url = `${environment.apiUrlBase}${this.MUNICIPIOS_PATH}`;
    return this.httpClient.get<Municipio[]>(url);
  }

  public prediccionMunicipio(idMunicipio: string, unidadTemperatura?: string):Observable<PrevisionMunicipio> {
    let url = `${environment.apiUrlBase}${this.PREVISION_MUNICIPIO_PATH}`;
    url += QueryParamsUtils.addFirstQueryParam(this.ID_MUNICIPIO_PARAM_NOMBRE, idMunicipio);
    url += QueryParamsUtils.addQueryParam(this.UNIDAD_TEMPERATURA_PARAM_NOMBRE, unidadTemperatura);
    return this.httpClient.get<PrevisionMunicipio>(url);
  }

}