export const ADD_ITEM = 'qgo/assessment/ADD_ITEM';
export const REMOVE_ITEM = 'qgo/assessment/REMOVE_ITEM';
export const SET_ITEM_DONE = 'qgo/assessment/SET_ITEM_DONE';
export const SET_SHOW_COMPLETED = 'qgo/assessment/SET_SHOW_COMPLETED';

export const addItem = (content) => {
  return { type: ADD_ITEM, content };
};

export const removeItem = id => {
  return { type: REMOVE_ITEM, id };
};

export const setItemDone = (id, done) => {
  return { type: SET_ITEM_DONE, id, done };
};

export const setShowCompleted= (showCompleted) => {
  return { type: SET_SHOW_COMPLETED, showCompleted };
}

export const initialState = {
  showCompleted: true,
  items: [
    { id: 1, content: 'Call mum', done: false },
    { id: 2, content: 'Buy cat food', done: false },
    { id: 3, content: 'Water the plants', done: false },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const nextId =
        state.items.reduce((id, item) => Math.max(item.id, id), 0) + 1;
      const newItem = {
        id: nextId,
        content: action.content,
      };

      return {
        ...state,
        items: [...state.items, newItem],
      };
    case REMOVE_ITEM:
      const filteredItems = state.items.filter(item => item.id !== action.id);
      return {
        ...state,
        items: filteredItems,
      };
      return {
        ...state,
        items: [...state.items, newItem],
      };
    case SET_ITEM_DONE:
      const statusUpdatedItems = state.items.map((item, index) => {
        if (item.id === action.id) {
            return {
              ...item,
              done: action.done
            };
        } else {
          return item;
        }
      });
      return {
        ...state,
        items: statusUpdatedItems,
      };
    case SET_SHOW_COMPLETED:
      return {
        ...state,
        showCompleted: action.showCompleted
      }
    default:
      return state;
  }
};

export default reducer;
