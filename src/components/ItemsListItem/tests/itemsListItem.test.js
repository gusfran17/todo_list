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

  it('should call onRemove with the id', () => {
    const item = { id: 2, content: 'Test 2' };
    const onDoneMock = jest.fn();
    const onRemoveMock = jest.fn();
    const renderedItem = shallow(<ItemsListItem item={item} onDone={onDoneMock} onRemove={onRemoveMock}/>);
    renderedItem.find('.itemControl-remove').simulate('click');
    expect(onRemoveMock.mock.calls.length).toBe(1);
    expect(onRemoveMock.mock.calls[0][0]).toBe(2);
  });

});
