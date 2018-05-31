import React from 'react';
import { shallow, mount } from 'enzyme';
import { ItemsList } from '../index';

const defaultProps = {
  items: [],
  showCompleted: true,
  onRemove: () => {},
  onDone: () => {},
  onShowCompleted: () => {},
};

describe('ItemsList', () => {
  it('renders without crashing', () => {
    shallow(<ItemsList {...defaultProps} />);
  });

  it('should display warning message if no items', () => {
    const renderedItem = shallow(<ItemsList {...defaultProps} items={[]} />);
    expect(renderedItem.find('#items-missing')).toHaveLength(1);
  });

  it('should not display warning message if items are present', () => {
    const items = [{ id: 1, content: 'Test 1' }];
    const renderedItem = shallow(<ItemsList {...defaultProps} items={items} />);
    expect(renderedItem.find('#items-missing')).toHaveLength(0);
  });

  it('should render items as list items', () => {
    const items = [{ id: 1, content: 'Test 1' }, { id: 2, content: 'Test 2' }];
    const renderedItem = shallow(<ItemsList {...defaultProps} items={items} />);
    expect(renderedItem.find('li')).toHaveLength(2);
  });

  it('should render with onRemove function', () => {
    const renderedItem = mount(<ItemsList {...defaultProps} />);
    expect(renderedItem.props().onRemove).toBeDefined();
  });

  it('should render with onDone function', () => {
    const renderedItem = mount(<ItemsList {...defaultProps} />);
    expect(renderedItem.props().onDone).toBeDefined();
  });

  it('should call onShowCompleted', () => {
    const items = [{ id: 1, content: 'Test 1', done: false }, { id: 2, content: 'Test 2', done: false }];
    const onShowCompletedMock = jest.fn();
    const renderedItem = mount(<ItemsList {...defaultProps} items={items} onShowCompleted={onShowCompletedMock} />);
    renderedItem.find('.itemsList-showCompleted').simulate('change');
    expect(onShowCompletedMock.mock.calls.length).toBe(1);
    expect(onShowCompletedMock.mock.calls[0][0]).toBe(false);
  });
});
