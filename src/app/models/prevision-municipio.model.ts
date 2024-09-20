import { ProbabilidadPrecipitacion } from "./probabilidad-precipitacion.model";

export interface PrevisionMunicipio {
    nombreMunicipio: string;
    fecha: Date;
    fechaFormateada: string;
    mediaTemperatura: number;
    unidadTemperatura: string;
    estadoCielo: string;
    probPrecipitacion: ProbabilidadPrecipitacion[];
}