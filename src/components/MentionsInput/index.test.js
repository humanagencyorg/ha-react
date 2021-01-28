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
  });
});
