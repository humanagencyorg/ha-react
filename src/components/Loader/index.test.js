import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Loader from './index';

describe('Loader component', () => {
  describe('when no props provided', () => {
    it('matches snapshot', () => {
      const component = renderer.create(
        <Loader />
      );

      expect(component).toMatchSnapshot();
    });
  });

  describe('when props provided', () => {
    it('matches snapshot', () => {
      const props = {
        loaderWrapper: {
          'data-testid': 'some fake test id',
          style: 'display: none;',
        },
      };

      const component = renderer.create(
        <Loader {...props} />
      );

      expect(component).toMatchSnapshot();
    });
  });
});
