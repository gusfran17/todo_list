import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { ItemsListItem } from './../';

const defaultProps = {
  item: { id: 1, content: 'first' },
  onRemove: () => {},
};

describe('ItemsListItem', () => {
  it('renders without crashing', () => {
    shallow(<ItemsListItem {...defaultProps} />);
  });

});
