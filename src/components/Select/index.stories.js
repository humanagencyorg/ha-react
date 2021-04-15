import React from 'react';
import { Select } from './index';

export default {
  title: 'Material Design fields/Select',
  component: Select,
};

const Template = (args) => <Select {...args} />;
const TemplateWithCustomFont = (args) => (
  <div style={{ fontFamily: 'Impact, Tahoma, sans-serif' }}>
    <Select {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Gorgeous label',
  options: [
    {
      value: 'LN',
      name: 'Lando Norris',
    },
    {
      value: 'GR',
      name: 'George Russell',
    },
    {
      value: 'DR',
      name: 'Daniel Ricciardo',
    },
    {
      value: 'CS',
      name: 'Carlos Sainz',
    },
  ],
};

export const LongLabel = Template.bind({});
LongLabel.args = {
  ...Default.args,
  label:
    'With the best bands, it seems to happen fast. The trajectory is steep, the progression seemingly preordained, inexorable.',
};

export const LongValue = Template.bind({});
LongValue.args = {
  ...Default.args,
  options: [
    {
      value: '',
      name:
        'Donaudampfschifffahrtselektrizitätenhauptbetriebswerkbauunterbeamtengesellschaft',
    },
  ],
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  ...Default.args,
  customColor: 'turquoise',
};

export const Error = Template.bind({});
Error.args = {
  ...Default.args,
  helperText: 'Something went horribly wrong',
  error: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

export const CustomFontContainer = TemplateWithCustomFont.bind({});
CustomFontContainer.args = {
  ...Default.args,
  label: 'Choose your fighter',
};
