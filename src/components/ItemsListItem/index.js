import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export const ItemsListItem = ({ item, onRemove }) => {
  return (
    <p>
      {item.content}
      <span className="itemControl-remove" onClick={() => { onRemove(item.id);}}>
        &#10008;
      </span>
    </p>
  );
};

ItemsListItem.propTypes = {
  item: PropTypes.shape({
    content: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  }),
  onRemove: PropTypes.func.isRequired,
};
