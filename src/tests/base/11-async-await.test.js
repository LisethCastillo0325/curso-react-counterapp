import { getImagen } from "../../base/11-async-await";

describe('Pruebas async-await y fecth', () => {

    test('debe retornar el url de la imagen', async () => {
        
        const url = await getImagen();
        //console.log(url);
        expect(url.includes('https://')).toBe(true);
         
    })
    
});