import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import 'jest-styled-components';

import { InlineEditInput } from './index';
import { InlineEditInputPrompt, Prefix, DisabledPrefix, Postfix, DisabledPostfix } from './style';
import { StyledErrorMessage } from '../style';

describe('InlineEditInput component', () => {
  describe('Other is checked', () => {
    it('matches snapshot', () => {
      const component = renderer.create(<InlineEditInput isChecked={true} />);

      expect(component).toMatchSnapshot();
    });

    it('renders input field', () => {
      const component = mount(<InlineEditInput isChecked={true} />);

      expect(component.find('input').exists()).toBe(true);
    });

    it('renders provided value', () => {
      const amount = 5;
      const component = mount(
        <InlineEditInput isChecked={true} value={amount} onChange={() => {}} />,
      );

      expect(component.find('input').props().value).toBe(amount);
    });

    it('renders provided placeholder', () => {
      const placeholder = 'Enter amount';
      const component = mount(
        <InlineEditInput isChecked={true} placeholder={placeholder} />,
      );

      expect(component.find('input').props().placeholder).toBe(placeholder);
    });

    it('renders prefix with provided icon', () => {
      const iconSymbol = '₴';
      const component = mount(
        <InlineEditInput isChecked={true} icon={iconSymbol} />,
      );

      expect(component.find(Prefix).text()).toBe(iconSymbol);
    });

    it('renders postfix with provided abbreviation', () => {
      const iconAbbreviation = 'gbp';
      const component = mount(
        <InlineEditInput isChecked={true} postfixIcon={iconAbbreviation} />,
      );

      expect(component.find(Postfix).text()).toBe(iconAbbreviation);
    });

    describe('with error', () => {
      it('renders error', () => {
        const errorMessage = 'error message';
        const component = mount(
          <InlineEditInput isChecked={true} error={errorMessage} />,
        );

        const errorComponent = component.find(StyledErrorMessage);

        expect(errorComponent.text()).toBe(errorMessage);
      });
    });
  });

  describe('Other is not checked', () => {
    it('matches snapshot', () => {
      const component = renderer.create(<InlineEditInput isChecked={false} placeholder='placeholder' />);

      expect(component).toMatchSnapshot();
    });

    it('does not render input field', () => {
      const component = mount(<InlineEditInput isChecked={false} />);

      expect(component.find('input').exists()).toBe(false);
    });

    it('renders InlineEditInputPrompt', () => {
      const component = mount(<InlineEditInput isChecked={false} />);

      expect(component.find(InlineEditInputPrompt).exists()).toBe(true);
    });

    it('renders provided placeholder', () => {
      const component = mount(<InlineEditInput isChecked={false} placeholder={'Placeholder'}/>);

      expect(component.find(InlineEditInputPrompt).text()).toBe('Placeholder');
    });

    it('renders prefix with provided icon', () => {
      const iconSymbol = '₴';
      const component = mount(
        <InlineEditInput isChecked={false} icon={iconSymbol} />,
      );

      expect(component.find(DisabledPrefix).text()).toBe(iconSymbol);
    });

    it('renders postfix with provided abbreviation', () => {
      const iconAbbreviation = 'gbp';
      const component = mount(
        <InlineEditInput isChecked={false} postfixIcon={iconAbbreviation} />,
      );

      expect(component.find(DisabledPostfix).text()).toBe(iconAbbreviation);
    });
  });
});
