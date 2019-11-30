import React from 'react';
import { shallow } from 'enzyme';
import CommentDetail from './CommentDetail';

describe('<CommentDetail />', () => {
  test('renders', () => {
    const wrapper = shallow(<CommentDetail />);
    expect(wrapper).toMatchSnapshot();
  });
});
