import React from 'react';
import { TextField } from './index';

export default {
  title: 'Material Design fields/TextField',
  component: TextField,
};

const Template = (args) => <TextField {...args} />;
const TemplateWithCustomFont = (args) => (
  <div style={{ fontFamily: 'Impact, Tahoma, sans-serif' }}>
    <TextField {...args} />
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

export const LongValue = Template.bind({});
LongValue.args = {
  ...Default.args,
  defaultValue:
    "Mama always said life was like a box of chocolates. You never know what you're gonna get.",
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
  label: 'Somebody once told me',
  defaultValue: 'The world is gonna roll me',
};
