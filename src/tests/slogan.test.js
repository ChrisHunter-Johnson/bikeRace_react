import React from 'react';
import { shallow } from 'enzyme';
import  { Slogan }  from '../container/slogan';

describe('Slogans form loads test with Enzyme', () => {
 it('renders without crashing', () => {
  shallow(<Slogan />);
 });
});
