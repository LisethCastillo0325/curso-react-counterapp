import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en funciones de heroes', () => {

    test('debe de retornar un heroe por id', () => {
    
        const id = 1;

        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id === id);

        expect( heroe ).toEqual(heroeData);

    });

    test('debe de retornar undefined cuando id no existe', () => {
    
        const id = 1454545;

        const heroe = getHeroeById(id);

        expect( heroe ).toEqual(undefined);

    });
    
    test('Debe de retornar un arreglo con los heroes de DC', () => {

        const owner = 'DC';
        const heroes_arr = getHeroesByOwner(owner);

        const heroesTest = heroes.filter(h => h.owner === owner);

        expect( heroes_arr ).toEqual( heroesTest );

    });

    test('Debe retornar un arreglo con los heroes de marvel', ()=> {

        const owner = 'Marvel';
        const heroes_arr = getHeroesByOwner(owner);

        expect( heroes_arr.length ).toBe( 2 );

    });

});