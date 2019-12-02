import React from './node_modules/react';
import { shallow } from './node_modules/enzyme';
import ApprovalCard from './approvalCard';

describe('<ApprovalCard />', () => {
  test('renders', () => {
    const wrapper = shallow(<ApprovalCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
