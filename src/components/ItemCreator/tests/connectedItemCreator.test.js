import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import ItemCreatorConnected from '../index';

describe('Connected ItemsList', () => {
  const initialState = {
    todos: {
      onAdd: () => {}
    }
  };
  const mockStore = configureStore();
  let store,container;

  beforeEach(()=>{
      store = mockStore(initialState)
      container = shallow(<ItemCreatorConnected store={store} /> )
  });

  it('should render without crashing', () => {
    expect(container.length).toEqual(1);
  });

  it('should have defined functions', () => {
    expect(container.prop('onAdd')).toBeDefined();
  });

});
