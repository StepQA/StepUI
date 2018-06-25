import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { Button } from './Button';
import { constants } from '../../core';
describe('ensuring regular buttons match snapshot', () => {
  constants.types.forEach(type => {
    constants.sizes.forEach(size => {
      it(`renders the ${size} ${type} button correctly`, () => {
        const tree = renderer
          .create(<Button onClick={Function} type={type} size={size}></Button>)
          .toJSON();
        expect(tree).toMatchSnapshot();

      });
    });
  });
});
describe('ensuring loading buttons match snapshot', () => {

  constants.types.forEach(type => {
    constants.sizes.forEach(size => {
      it(`renders the ${size} ${type} loading button correctly`, () => {
        const tree = renderer
          .create(<Button onClick={Function} loading={true} type={type} size={size}></Button>)
          .toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
describe("button UI", () => {
  it('renders the correct child elements in buttons', () => {
    //TODO Add actual nodes, rather than text
    const wrapper = mount(
      <Button>Test content</Button>
    );
    const button = wrapper.find("button");
    expect(button.text()).toBe('Test content');
  });
  it('handles button clicks correctly', done => {
    const clickEvent = () => {
      
      done();
    };
    const wrapper = mount(
      <Button onClick={clickEvent}>Test content</Button>
    );
    const button = wrapper.find("button");
    button.simulate("click");
  });
});
