import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export const ItemsListItem = ({ item }) => {
  return (
    <p>
      {item.content}
    </p>
  );
};

ItemsListItem.propTypes = {
  item: PropTypes.shape({
    content: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  }),
};
