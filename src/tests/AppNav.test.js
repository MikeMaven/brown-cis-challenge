import React from 'react';
import { shallow } from 'enzyme';
import AppNav from '../components/AppNav'

it('renders the expected navbar components', () => {
  const wrapper = shallow(<AppNav />);

  expect(wrapper.contains("Brown CIS Challenge")).toEqual(true)
  expect(wrapper.contains("Home")).toEqual(true)
  expect(wrapper.contains("Hire Mike (It's the right choice)")).toEqual(true)
})