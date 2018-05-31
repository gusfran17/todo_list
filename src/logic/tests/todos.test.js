import reducer, { initialState, addItem, removeItem, setItemDone, setShowCompleted } from '../todos';

describe('reducer', () => {
  let state;
  beforeEach(() => {
    state = {
      showCompleted: true,
      items: [{ id: 1, content: 'first', done: false }, { id: 2, content: 'second', done: false }, { id: 3, content: 'third', done: false }],
    };
  });

  it('should return state for unknown action', () => {
    const mockState = { test: 'testItem' };
    const mockAction = { type: 'mystery-meat' };
    const result = reducer(mockState, mockAction);
    expect(result).toEqual(mockState);
  });

  it('should use initial state if state not provided', () => {
    const mockAction = { type: 'mystery-meat' };
    const result = reducer(undefined, mockAction);
    expect(result).toEqual(initialState);
  });

  it('should add new items on ADD_ITEM', () => {
    const mockAction = addItem('fourth');
    const result = reducer(state, mockAction);
    expect(result.items).toHaveLength(4);
    expect(result.items[3].id).toEqual(4);
    expect(result.items[3].content).toEqual('fourth');
  });

  it('should remove items on REMOVE_ITEM', () => {
    const mockAction = removeItem(2);
    const result = reducer(state, mockAction);
    expect(result.items).toHaveLength(2);
    expect(result.items[0].id).toEqual(1);
    expect(result.items[1].id).toEqual(3);
  });

  it('should set item on SET_ITEM_DONE', () => {
    const mockAction = setItemDone(1, true);
    const result = reducer(state, mockAction);
    expect(result.items[0].done).toEqual(true);
    expect(result.items[1].done).toEqual(false);
    expect(result.items[2].done).toEqual(false);
  });

  it('should set showCompleted to false', () => {
    const mockAction = setShowCompleted(false);
    const result = reducer(state, mockAction);
    expect(result.showCompleted).toEqual(false);
  });
});
