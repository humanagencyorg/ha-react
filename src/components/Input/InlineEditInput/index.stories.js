import React from 'react';
import { InlineEditInput } from './index';

export default {
  title: 'InlineEditInput',
  component: InlineEditInput,
};

const Template = (args) => <InlineEditInput {...args} />;

export const Unchecked = Template.bind({});
Unchecked.args = {
  isChecked: false,
  type: 'number',
  icon: '$',
  postfixIcon: 'usd',
  noMargin: true,
  placeholder: 'Other amount',
  autoFocus: false,
};

export const Checked = Template.bind({});
Checked.args = {
  ...Unchecked.args,
  isChecked: true,
  placeholder: 'Enter amount',
  autoFocus: true,
};
