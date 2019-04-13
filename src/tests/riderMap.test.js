import React from 'react';
import { shallow } from 'enzyme';
import  RiderMap  from '../container/RiderMap';

describe('Map of Riders loads test with Enzyme', () => {
 it('renders without crashing', () => {
  shallow(<RiderMap />);
 });
});
