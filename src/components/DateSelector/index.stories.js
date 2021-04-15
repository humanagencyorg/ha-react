import React from 'react';
import { DateSelector } from './index';

export default {
  title: 'Material Design fields/DateSelector',
  component: DateSelector,
};

const Template = (args) => <DateSelector {...args} />;
const TemplateWithCustomFont = (args) => (
  <div style={{ fontFamily: 'Impact, Tahoma, sans-serif' }}>
    <DateSelector {...args} />
  </div>
);

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

export const CustomColor = Template.bind({});
CustomColor.args = {
  ...Default.args,
  customColor: 'turquoise',
};

export const Error = Template.bind({});
Error.args = {
  ...Default.args,
  helperText: 'Get to the choppa!',
  error: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

export const CustomFontContainer = TemplateWithCustomFont.bind({});
CustomFontContainer.args = {
  ...DefaultValue.args,
};
