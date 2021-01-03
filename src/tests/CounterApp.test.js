import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe('Pruebas del <CounterApp/>', () => {

    let wrapper = shallow( <CounterApp/> );

    beforeEach(() => {
        wrapper = shallow( <CounterApp/> );
    });

    test('debe mostrar <CounterApp/> correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
    });

    test('debe mostrar el valor de 100', () => {
        const value = 100;

        const wrapper = shallow( <CounterApp value={value} /> );

        const counterText = wrapper.find('h2').text().trim();

        expect(Number(counterText)).toBe(value);
    });

    test('debe incrementar con el botón +1', () => {
        
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('11'); 

    });

    test('debe decrementar con el botón -1', () => {
        
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('9'); 

    });
    
    test('debe de colocar el valor por defecto con el btn reset', () => {
        const value = 105;

        const wrapper = shallow( <CounterApp value={value} /> );

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(Number(counterText)).toBe(value);
    })
    
    
});