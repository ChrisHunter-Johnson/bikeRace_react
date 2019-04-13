import React from 'react';
import { shallow } from 'enzyme';
import { FlickrImg } from '../container/flickrImg';

describe('Flicker images loads test with Enzyme', () => {
 it('renders without crashing', () => {
  shallow(<FlickrImg />);
 });
});
