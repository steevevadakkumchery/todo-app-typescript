import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import ToDo from './containers/Todo';

describe('<App />', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(<App />);
  });

  test('should contain the <ToDo /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<ToDo />)).toBe(true);
  })
  
})

