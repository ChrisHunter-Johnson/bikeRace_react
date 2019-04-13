import React from 'react';
import { shallow } from 'enzyme';
import { Rider } from '../container/Rider';

describe('Rider loads test with Enzyme', () => {
 it('renders without crashing', () => {
  shallow(<Rider />);
 });
});
