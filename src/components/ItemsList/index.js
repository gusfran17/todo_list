import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './styles.css';
import { ItemsListItem } from './../ItemsListItem';
import { removeItem, setItemDone } from '../../logic/todos';

export const ItemsList = ({ items, onRemove, onDone }) => {
  return (
    <div>
      <ul className="itemsList-ul">
        {items.length < 1 && <p id="items-missing">Add some tasks above.</p>}
        {items.map((item) =>
          <li key={item.id} >
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
  return { items: state.todos.items };
};

const mapDispatchToProps = (dispatch) => ({
  onRemove: (id) => dispatch(removeItem(id)),
  onDone: (id, done) => dispatch(setItemDone(id,done)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
