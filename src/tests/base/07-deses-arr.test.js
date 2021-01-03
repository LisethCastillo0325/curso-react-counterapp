import { retornaArreglo } from '../../base/07-deses-arr'

describe('Pruebas en desestructuración', () => {

    test('Debe de retornar un string y un numero', () => {
        const [ letras, numeros ] = retornaArreglo();

        expect( letras ).toBe('ABC');
        expect( numeros ).toBe(123);
        
        expect( typeof letras ).toBe('string');
        expect( typeof numeros ).toBe('number');
    });

});