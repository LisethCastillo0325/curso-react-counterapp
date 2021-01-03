import '@testing-library/jest-dom';
import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en 02-template-string.js', ()=>{

    test('getSaludo debe retornar Hola Liseth', ()=> {

        const nombre = 'Liseth';

        const saludo = getSaludo(nombre);

        expect( saludo ).toBe('Hola ' + nombre + '!'); 

    })

    test('getSaludo sin parametro debe retornar Hola Dayana', ()=> {

        const saludo = getSaludo();

        expect( saludo ).toBe('Hola Dayana!'); 
    })

});