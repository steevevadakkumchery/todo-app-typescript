import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import ToDo from './containers/Todo';
import getCookie from './helpers/getCookie'

const COOKIE_NAME = 'list';

describe('<App />', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(<App />);
  });

  test('should contain the <ToDo /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<ToDo list={[]}/>)).toBe(true);
  })
  
  describe('App has an existing list of todo items', () => {

    test('should pass list as props to ToDo component', () => {
      const todoList = JSON.stringify({ todoList: ['shopping', 'gym', 'reading']});

      document.cookie = `${COOKIE_NAME}=${todoList}`;
      const wrapper = shallow(<App />);
      const todoComponent = wrapper.find(ToDo);

      expect(todoComponent.props().list).toEqual(JSON.parse(todoList).todoList);
      document.cookie = `${COOKIE_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;

    });
  });

  describe('App has no existing list', () => {

    test('should create a cookie with empty array when no list found in cookie', () => {
      document.cookie = `${COOKIE_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`; // to make sure the cookie is empty
      const wrapper = shallow(<App />);
      let currentCookie = getCookie(COOKIE_NAME);
      
      let emptyListObject = JSON.stringify({todoList: []});
      expect(currentCookie).toEqual(emptyListObject);
    })
  })
});

