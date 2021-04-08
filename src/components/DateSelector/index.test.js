import React from 'react';
import renderer from 'react-test-renderer';

import { DateSelector } from './index';
import { mount } from 'enzyme';

describe('DateSelector component', () => {
  describe('without error', () => {
    it('matches snapshot', () => {
      const props = {
        name: 'name',
        label: 'label',
      };

      const wrapper = renderer.create(<DateSelector {...props} />);

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

      const wrapper = renderer.create(<DateSelector {...props} />);

      expect(wrapper.toJSON()).toMatchSnapshot();
    });

    it('shows error message', () => {
      const errorMessage = 'error';
      const props = {
        error: true,
        helperText: errorMessage,
      };

      const wrapper = mount(<DateSelector {...props} />);
      const errorWrapper = wrapper.find('p.Mui-error');

      expect(errorWrapper.text()).toBe(errorMessage);
    });
  });

  it('sets default value from props', () => {
    const defaultValue = '11/11/1999';
    const props = {
      defaultValue,
    };

    const wrapper = mount(<DateSelector {...props} />);
    const input = wrapper.find('input');

    expect(input.prop('value')).toBe(defaultValue);
  });

  it('calls #onFocus from props on field focus', () => {
    const onFocus = jest.fn();
    const props = {
      onFocus,
    };

    const wrapper = mount(<DateSelector {...props} />);
    const input = wrapper.find('input');

    input.simulate('focus');

    expect(onFocus).toHaveBeenCalled();
  });
});
