import React from 'react';
import {shallow, mount, render} from 'enzyme';

import {AllTripsList} from '../components/all-trips-list';

describe('<AllTripsList />', () => {
  it('should render a component', () =>{
    shallow(<AllTripsList trips={[]} dispatch={()=>{}} />);
    // console.log(shallow(<App />));
  });
  it('should render the correct properties of an object', () => {
    const objects = [{
      id: '111111111111111111111101',
      name: 'tom',
      selectedOptions: ['skiing', 'breweries'],
      duration: 9,
      suggestions: ['denver']
    },
    {
      id: '111111111111111111111102',
      name: 'frank',
      selectedOptions: ['beaches'],
      duration: 2,
      suggestions: ['san diego', 'cuba']
    }];
    const wrapper = shallow(<AllTripsList dispatch={()=>{}} trips={objects} />);
    // wrapper.setState({objects});
    // console.log(wrapper);
    const items = wrapper.find('.trip-object');
    // expect(wrapper.find('.trip-object')).to.exist();
    // console.log(items[0].text());
    console.log(items.length);
    console.log(objects.length);
    expect(items.length).toEqual(objects.length);
    // items.forEach((item, index) => {
    //   console.log(item.text());
    //   expect(item.text()).toEqual(items[index]);
    // })
  })
});
