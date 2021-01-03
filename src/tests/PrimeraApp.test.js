//import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import PrimeraApp from "../PrimeraApp";

describe('Pruebas en <PrimeraApp />', () => {

    // test('debe mostrar el mensaje "Hola, soy Liseth"', () => {
    //     const saludo = "Hola, soy Liseth";
    //     const wrapper = render( <PrimeraApp saludo={ saludo } /> );
    //     expect( wrapper.getByText(saludo) ).toBeInTheDocument();
    // })
    
    test('debe de mostrat <PrimeraApp/>', () => {
        const saludo = "Hola, soy Liseth";
        const wrapper = shallow( <PrimeraApp saludo = { saludo } /> );
        
        expect( wrapper ).toMatchSnapshot();

    });


    test('debe mostrar el subtitulo enviado por props', () => {
        const saludo = 'Hola, soy Liseth';
        const subTitulo = 'Las pruebas';
        const wrapper = shallow( 
            <PrimeraApp
                saludo={saludo} 
                subtitlo={subTitulo} 
            /> 
        );

        const textoParrafo = wrapper.find('p').text();

        expect(textoParrafo).toBe(subTitulo);
    });
    
    

});