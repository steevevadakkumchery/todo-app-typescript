import React from 'react';
import Todo from './Todo';
import { shallow } from 'enzyme';

describe('<Todo />', () => {
    test('should render without crashing', () => {
        const wrapper = shallow(<Todo />);
    });
})
