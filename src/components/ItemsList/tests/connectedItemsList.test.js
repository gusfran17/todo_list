import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import ItemsListConnected from '../index';

describe('Connected ItemsList', () => {
  const initialState = {
    todos: {
      showCompleted: true,
      onRemove: () => {},
      onDone: () => {},
      onShowCompleted: () => {},
      items: [{ id: 1, content: 'First' }, { id: 2, content: 'Second' }, { id: 3, content: 'Third' }]
    }
  };
  const mockStore = configureStore();
  let store,container;

  beforeEach(()=>{
      store = mockStore(initialState)
      container = shallow(<ItemsListConnected store={store} /> )
  });

  it('should render without crashing', () => {
    expect(container.length).toEqual(1);
  });

  it('should have 3 items', () => {
    expect(container.prop('items')).toHaveLength(3);
  });

  it('should have onRemove defined function', () => {
    expect(container.prop('onRemove')).toBeDefined();
  });

  it('should have onDone defined function', () => {
    expect(container.prop('onDone')).toBeDefined();
  });

  it('should have onShowCompleted defined function', () => {
    expect(container.prop('onShowCompleted')).toBeDefined();
  });

  it('should have a defined showCompleted prop', () => {
    expect(container.prop('showCompleted')).toBe(true);
  });
});
