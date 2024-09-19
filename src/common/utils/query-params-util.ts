export class QueryParamsUtils {

    static addFirstQueryParam(paramName: string, paramValue: string) {
        return `?${paramName}=${paramValue}`;
    }

    static addQueryParam(paramName: string, paramValue?: string) {
        return paramValue ? `&${paramName}=${paramValue}` : '';
    }

}