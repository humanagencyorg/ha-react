import React from 'react';
import renderer from 'react-test-renderer';

import { TextField } from './index';
import { mount } from 'enzyme';

describe('TextField component', () => {
  describe('without error', () => {
    it('matches snapshot', () => {
      const props = {
        name: 'name',
        label: 'label',
      };

      const wrapper = renderer.create(<TextField {...props} />);

      expect(wrapper.toJSON()).toMatchSnapshot();
    });
  });

  describe('with error', () => {
    it('matches snapshot', () => {
      const props = {
        name: 'name',
        label: 'label',
        error: true,
        helperText: 'error',
      };

      const wrapper = renderer.create(<TextField {...props} />);

      expect(wrapper.toJSON()).toMatchSnapshot();
    });

    it('shows error message', () => {
      const errorMessage = 'error';
      const props = {
        error: true,
        helperText: errorMessage,
      };

      const wrapper = mount(<TextField {...props} />);
      const errorWrapper = wrapper.find('p.Mui-error');

      expect(errorWrapper.text()).toBe(errorMessage);
    });
  });

  it('sets default value from props', () => {
    const defaultValue = 'value';
    const props = {
      defaultValue,
    };

    const wrapper = mount(<TextField {...props} />);
    const input = wrapper.find('input');

    expect(input.prop('defaultValue')).toBe(defaultValue);
  });

  it('calls #onFocus from props on field focus', () => {
    const onFocus = jest.fn();
    const props = {
      onFocus,
    };

    const wrapper = mount(<TextField {...props} />);
    const input = wrapper.find('input');

    input.simulate('focus');

    expect(onFocus).toHaveBeenCalled();
  });
});
