import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import { act } from 'react-dom/test-utils';
import toJson from 'enzyme-to-json';
import { OptionsList } from './index';

describe('OptionsList component', () => {
  it('renders loader', async () => {
    const fn = () => {};
    const steps = [
      {
        type: 'experiences',
        title: 'Experiences',
        referencePrefix: 'experience_',
        loadList: () => new Promise(fn),
      },
    ];

    let component;

    await act(async () => {
      component = mount(
        <OptionsList
          steps={steps}
          experienceId={1}
          handleLastSelect={fn}
          setCurrentItemIndex={fn}
          currentItemIndex={0}
          listRef={fn}
          currentItemRef={fn}
          inputWidth={415}
        />,
      );
    });

    component.update();
    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders first step', async () => {
    const fn = () => {};
    const steps = [
      {
        type: 'experiences',
        title: 'Experiences',
        referencePrefix: 'experience_',
        loadList: () =>
          new Promise(function(resolve) {
            resolve([
              { title: 'Full name', value: 'full_name' },
              { title: 'First name', value: 'first_name' },
            ]);
          }),
      },
    ];

    let component;

    await act(async () => {
      component = mount(
        <OptionsList
          steps={steps}
          experienceId={1}
          handleLastSelect={fn}
          setCurrentItemIndex={fn}
          currentItemIndex={0}
          listRef={fn}
          currentItemRef={fn}
          inputWidth={415}
        />,
      );
    });

    component.update();
    expect(toJson(component)).toMatchSnapshot();
  });
});
