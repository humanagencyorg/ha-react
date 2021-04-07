import React from 'react';
import { TextField } from './index';

export default {
  title: 'TextField',
  component: TextField,
};

const Template = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Gorgeous label',
};

export const LongLabel = Template.bind({});
LongLabel.args = {
  label:
    'With the best bands, it seems to happen fast. The trajectory is steep, the progression seemingly preordained, inexorable.',
};

export const LongValue = Template.bind({});
LongValue.args = {
  ...Default.args,
  defaultValue: 'Mama always said life was like a box of chocolates. You never know what you\'re gonna get.',
};

export const Error = Template.bind({});
Error.args = {
  ...Default.args,
  helperText: 'Get to the choppa!',
  error: true,
};
