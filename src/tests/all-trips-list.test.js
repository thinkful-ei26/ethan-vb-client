import React from 'react';
import {shallow, mount, render} from 'enzyme';

import AllTripsList from '../components/all-trips-list';

describe('<AllTripsList />', () => {
  it('should render a component', () =>{
    shallow(<AllTripsList />);
    // console.log(shallow(<App />));
  });
  it('should render the correct properties of an object', () => {
    const objects = [{
      _id: '111111111111111111111101',
      name: 'tom',
      selectedOptions: ['skiing', 'breweries'],
      duration: 9,
      suggestions: ['denver']
    },
    {
      _id: '111111111111111111111102',
      name: 'frank',
      selectedOptions: ['beaches'],
      duration: 2,
      suggestions: ['san diego', 'cuba']
    }];
    const wrapper = shallow(<AllTripsList />);
    wrapper.setState({objects});
    // console.log(wrapper);
    const items = wrapper.find('.trip-object');
    console.log(items);
    console.log(items.length);
    console.log(objects.length);
    // expect(item.length).toEqual(objects.length);
  })
});