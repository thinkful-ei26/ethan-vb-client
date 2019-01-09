import React from 'react';
import { shallow, mount, render } from 'enzyme';

import App from '../components/app';

describe('<App />', () => {
  it('Should render a component', () =>{
    shallow(<App />);
    // console.log(shallow(<App />));
  });
});

