import React from 'react';
import { DateSelector } from './index';

export default {
  title: 'DateSelector',
  component: DateSelector,
};

const Template = (args) => <DateSelector {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Gorgeous label',
};

export const LongLabel = Template.bind({});
LongLabel.args = {
  label:
    'With the best bands, it seems to happen fast. The trajectory is steep, the progression seemingly preordained, inexorable.',
};

export const DefaultValue = Template.bind({});
DefaultValue.args = {
  ...Default.args,
  defaultValue:
    '12/29/1999',
};

export const Error = Template.bind({});
Error.args = {
  ...Default.args,
  helperText: 'Get to the choppa!',
  error: true,
};
