import React from 'react';
import InputBox from './InputBox';
import { shallow } from 'enzyme';

describe('<InputBox />', () => {
    test('should render without crashing', () => {
        const wrapper = shallow(<InputBox />);
    });

    test('should contain an input field', () => {
        const handleOnChange = jest.fn();
        const wrapper = shallow(<InputBox handleOnChange={handleOnChange}/>);
        expect(wrapper.find('input').length).toBe(1);
    });

    test('should not contain an input field', () => {
        const wrapper = shallow(<InputBox />);
        expect(wrapper.find('input').length).toBe(0);
    })

    test('should call handleInput on change of input value', () => {
        const handleOnChange = jest.fn();
        const wrapper = shallow(<InputBox handleOnChange={handleOnChange}/>);
        const input = wrapper.find('input');
        const inputValue = 'This is what I need to do.';

        input.simulate('change', { target: { value: inputValue} });

        expect(handleOnChange).toBeCalledTimes(1);
        expect(handleOnChange).toBeCalledWith(inputValue);
    });

    test('should show value using the value from props', () => {
        const inputValue = 'current text value';
        const wrapper = shallow(<InputBox handleOnChange={jest.fn()} inputValue={inputValue}/>);
        const inputField = wrapper.find('input');

        expect(inputField.props().value).toEqual(inputValue);
    });
});