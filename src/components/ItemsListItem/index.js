import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export const ItemsListItem = ({ item, onRemove, onDone }) => {
  return (
    <p>
      {item.done? <span>&#10004;</span>: undefined}
      {item.content}
      <span className="itemControl-remove" onClick={() => { onRemove(item.id);}}>
        &#10008;
      </span>
      <button className="itemControl-done" onClick={() => { onDone(item.id, !item.done);}}>
        {item.done? "SET AS UNDONE": "SET AS DONE"}
      </button>
    </p>
  );
};

ItemsListItem.propTypes = {
  item: PropTypes.shape({
    content: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  }),
  onRemove: PropTypes.func.isRequired,
  onDone: PropTypes.func.isRequired,
};
