import React from 'react';
import renderer from 'react-test-renderer';
import Icon from './index';

describe('Icon component', () => {
  it('matches snapshot', () => {
    const component = renderer
      .create(<Icon src="http://default.props/image.png"/>)
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
