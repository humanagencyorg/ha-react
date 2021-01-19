import './style.css';
import React from 'react';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'black',
    values: [
      {
        name: 'twitter',
        value: '#00aced',
      },
      {
        name: 'facebook',
        value: '#3b5998',
      },
      {
        name: 'white',
        value: '#fff',
      },
      {
        name: 'black',
        value: '#000',
      },
    ],
  },
};

export const decorators = [
  (Story) => (
    <div style={{ maxWidth: '536px', margin: '0 auto', paddingTop: '1em' }}>
      <Story />
    </div>
  ),
];
