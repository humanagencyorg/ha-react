import React from 'react';
import renderer from 'react-test-renderer';

import { Select } from './index';
import { mount } from 'enzyme';

describe('Select component', () => {
  describe('without error', () => {
    it('matches snapshot', () => {
      const options = [{ value: 'value_1', name: 'name_1' }];
      const props = {
        options,
        name: 'name',
        label: 'label',
      };

      const wrapper = renderer.create(<Select {...props} />);

      expect(wrapper.toJSON()).toMatchSnapshot();
    });
  });

  describe('with error', () => {
    it('matches snapshot', () => {
      const options = [{ value: 'value_1', name: 'name_1' }];
      const props = {
        options,
        name: 'name',
        label: 'label',
        error: true,
        helperText: 'error',
      };

      const wrapper = renderer.create(<Select {...props} />);

      expect(wrapper.toJSON()).toMatchSnapshot();
    });

    it('shows error message', () => {
      const options = [{ value: 'value_1', name: 'name_1' }];
      const errorMessage = 'error';
      const props = {
        options,
        error: true,
        helperText: errorMessage,
      };

      const wrapper = mount(<Select {...props} />);
      const errorWrapper = wrapper.find('p.Mui-error');

      expect(errorWrapper.text()).toBe(errorMessage);
    });
  });

  it('sets default value from props', () => {
    const options = [{ value: 'value_1', name: 'name_1' }];
    const defaultValue = 'value_1';
    const props = {
      options,
      defaultValue,
    };

    const wrapper = mount(<Select {...props} />);
    const select = wrapper.find('select');

    expect(select.prop('value')).toBe(defaultValue);
  });

  it('calls #onFocus from props on field focus', () => {
    const onFocus = jest.fn();
    const options = [{ value: 'value_1', name: 'name_1' }];
    const props = {
      options,
      onFocus,
    };

    const wrapper = mount(<Select {...props} />);
    const select = wrapper.find('select');

    select.simulate('focus');

    expect(onFocus).toHaveBeenCalled();
  });
});
