/**
 * @jest-environment jsdom
 */
import React from 'react';
import {shallow, mount} from 'enzyme';
import DogCard from '../src/components/DogCard';

describe('Button', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(
        <DogCard
          name={'test'}
          imgurl={require('../src/assets/images/dog_1.jpg')}
          location={'test'}
        />,
      );
      expect(component).toMatchSnapshot();
    });
  });
  describe('Title', () => {
    it('should be correct', () => {
      const component = mount(
        <DogCard
          name={'test'}
          imgurl={require('../src/assets/images/dog_1.jpg')}
          location={'test'}
        />,
      );
      const title = component.find('Text').first();
      expect(title.text()).toEqual('test');
    });
  });
});
