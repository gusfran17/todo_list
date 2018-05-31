import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './styles.css';
import { ItemsListItem } from './../ItemsListItem';
import { removeItem, setItemDone, setShowCompleted } from '../../logic/todos';

export const ItemsList = ({ items, showCompleted, onRemove, onDone, onShowCompleted }) => {
  return (
    <div>
      <div>
        Show completed items
        <input
          className="itemsList-showCompleted"
          type="checkbox"
          checked={showCompleted}
          onChange={()=>{onShowCompleted(!showCompleted)}}
        />
      </div>
      <ul className="itemsList-ul">
        {items.length < 1 && <p id="items-missing">Add some tasks above.</p>}
        {items.map((item) =>
          <li key={item.id} className={(!showCompleted && item.done)?"hidden":""}>
            <ItemsListItem
              item={item}
              onRemove={onRemove}
              onDone={onDone}/>
          </li>
        )}
      </ul>
    </div>
  );
};

ItemsList.propTypes = {
  items: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
  onDone: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    items: state.todos.items,
    showCompleted: state.todos.showCompleted
  };
};

const mapDispatchToProps = (dispatch) => ({
  onRemove: (id) => dispatch(removeItem(id)),
  onDone: (id, done) => dispatch(setItemDone(id,done)),
  onShowCompleted: (showCompleted) => dispatch(setShowCompleted(showCompleted))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
