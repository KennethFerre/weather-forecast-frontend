export class StringUtils {
    static accentsMap: { [key: string]: string } = {
        'á': 'a', 
        'é': 'e',
        'í': 'i',
        'ó': 'o',
        'ú': 'u',
        'ü': 'u',
        'Á': 'A', 
        'É': 'E', 
        'Í': 'I', 
        'Ó': 'O', 
        'Ú': 'U',
        'Ü': 'U'
    };
    
    public static removeAccents(value: string) {
        return value.replace(/[áéíóúüÁÉÍÓÚÜ]/g, (match: string): string => StringUtils.accentsMap[match] || match);
    }
}