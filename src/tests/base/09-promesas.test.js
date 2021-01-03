import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';

describe('Pruebas promesas async', () => {
    
    test('getHeroeByIdAsync debe retornar un heroe async', (done) => {
        
        const id = 1;

        getHeroeByIdAsync(id)
            .then(heroe => {

                expect(heroe).toEqual(heroes[0]);
                done();
            });

    });

    test('Debe obtener un error si el heroe por ID no existe', (done) => {
        
        const id = 10;

        getHeroeByIdAsync( id )
        .catch(err => {
            expect( err ).toBe('No se pudo encontrar el héroe');
            done();
        });
        
    });
    
    

})
