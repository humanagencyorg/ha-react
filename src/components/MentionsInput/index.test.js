import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import toJson from 'enzyme-to-json';
import { MentionsInput } from './index';

describe('MentionsInput component', () => {
  describe('when textarea prop is true', () => {
    it('matches snaphot', () => {
      const steps = [
        {
          type: '',
          title: '',
          referencePrefix: '',
          loadList: () => {},
        },
      ];
      const props = {
        steps,
        name: 'Name',
        defaultValue: 'title',
        placeholder: 'placeholder',
        experienceId: 1,
        textarea: true,
        readOnly: false,
      };

      const component = mount(<MentionsInput {...props} />);

      expect(toJson(component)).toMatchSnapshot();
    });

    it('sets ref value from props', () => {
      const mockRef = jest.fn();
      const steps = [
        {
          type: '',
          title: '',
          referencePrefix: '',
          loadList: () => {},
        },
      ];
      const props = {
        steps,
        name: 'Name',
        textarea: true,
        ref: mockRef,
      };

      const wrapper = mount(<MentionsInput {...props} />);
      const textareaWrapper = wrapper.find("StyledComponent[name='Name']");

      expect(textareaWrapper.prop('forwardedRef')).toEqual(mockRef);
    });

    describe('with error', () => {
      it('matches snapshot', () => {
        const steps = [
          {
            type: '',
            title: '',
            referencePrefix: '',
            loadList: () => {},
          },
        ];
        const props = {
          steps,
          name: 'Name',
          defaultValue: 'title',
          placeholder: 'placeholder',
          experienceId: 1,
          textarea: true,
          readOnly: false,
          error: 'error',
        };

        const component = mount(<MentionsInput {...props} />);

        expect(toJson(component)).toMatchSnapshot();
      });
    });

    describe('with custom styles', () => {
      it('matches snapshot', () => {
        const steps = [
          {
            type: '',
            title: '',
            referencePrefix: '',
            loadList: () => {},
          },
        ];
        const style = {
          background: 'white',
          color: 'brown',
          borderRadius: 0,
        };
        const props = {
          steps,
          name: 'Name',
          defaultValue: 'title',
          placeholder: 'placeholder',
          experienceId: 1,
          textarea: true,
          readOnly: false,
          inputStyle: style,
        };

        const component = mount(<MentionsInput {...props} />);

        expect(toJson(component)).toMatchSnapshot();
      });
    });
  });

  describe('when textarea prop is false', () => {
    it('matches snaphot', () => {
      const steps = [
        {
          type: '',
          title: '',
          referencePrefix: '',
          loadList: () => {},
        },
      ];
      const props = {
        steps,
        name: 'Name',
        defaultValue: 'title',
        placeholder: 'placeholder',
        experienceId: 1,
        textarea: false,
        readOnly: true,
      };

      const component = mount(<MentionsInput {...props} />);

      expect(toJson(component)).toMatchSnapshot();
    });

    it('sets ref value from props', () => {
      const mockRef = jest.fn();
      const steps = [
        {
          type: '',
          title: '',
          referencePrefix: '',
          loadList: () => {},
        },
      ];
      const props = {
        steps,
        name: 'Name',
        ref: mockRef,
      };

      const wrapper = mount(<MentionsInput {...props} />);
      const inputWrapper = wrapper.find("StyledComponent[name='Name']");

      expect(inputWrapper.prop('forwardedRef')).toEqual(mockRef);
    });

    it('sets default value after prop changed', () => {
      const defaultValue = 'value';
      const newDefaultValue = 'new value';
      const steps = [
        {
          type: '',
          title: '',
          referencePrefix: '',
          loadList: () => {},
        },
      ];
      const props = {
        steps,
        name: 'Name',
        defaultValue,
        experienceId: 1,
        textarea: false,
      };

      const wrapper = mount(<MentionsInput {...props} />);
      const inputWrapper = wrapper.find("StyledComponent[name='Name']");

      expect(inputWrapper.prop('value')).toEqual(defaultValue);

      wrapper.setProps({ defaultValue: newDefaultValue });
      wrapper.update();

      const reFoundInputWrapper = wrapper.find("StyledComponent[name='Name']");
      expect(reFoundInputWrapper.prop('value')).toEqual(newDefaultValue);
    });

    describe('with custom styles', () => {
      it('matches snapshot', () => {
        const steps = [
          {
            type: '',
            title: '',
            referencePrefix: '',
            loadList: () => {},
          },
        ];
        const style = {
          background: 'white',
          color: 'brown',
          borderRadius: 0,
        };
        const props = {
          steps,
          name: 'Name',
          defaultValue: 'title',
          placeholder: 'placeholder',
          experienceId: 1,
          textarea: false,
          readOnly: true,
          inputStyle: style,
        };

        const component = mount(<MentionsInput {...props} />);

        expect(toJson(component)).toMatchSnapshot();
      });
    });

    describe('with error', () => {
      it('matches snapshot', () => {
        const steps = [
          {
            type: '',
            title: '',
            referencePrefix: '',
            loadList: () => {},
          },
        ];
        const props = {
          steps,
          name: 'Name',
          defaultValue: 'title',
          placeholder: 'placeholder',
          experienceId: 1,
          textarea: false,
          readOnly: true,
          error: 'error',
        };

        const component = mount(<MentionsInput {...props} />);

        expect(toJson(component)).toMatchSnapshot();
      });
    });
  });
});
