import React from 'react';
import {
  Input,
  ChatbotPhoneInput,
  InputWithIcon,
  DraggableInput,
  ColorInput,
} from './index';
import { PrimaryButton } from '../Button';

export default {
  title: 'Input',
  component: Input,
};

const DefaultTemplate = (args) => <Input {...args} />;
const ChatbotPhoneTemplate = (args) => <ChatbotPhoneInput {...args} />;
const WithIconTemplate = (args) => <InputWithIcon {...args} />;
const WithColorTemplate = (args) => <ColorInput {...args} />;
const DraggableTemplate = (args) => <DraggableInput {...args} />;

export const Default = DefaultTemplate.bind({});
Default.args = {};

export const WithCustomStyles = DefaultTemplate.bind({});
WithCustomStyles.args = {
  inputStyle: {
    borderTopRightRadius: '0px',
    borderTopLeftRadius: '0px',
  },
};

export const WithError = DefaultTemplate.bind({});
WithError.args = {
  error: "can't be less than 1",
};

export const ChatbotWithActionButton = ChatbotPhoneTemplate.bind({});
ChatbotWithActionButton.args = {
  disabled: true,
  value: '+380123456789',
  actionButton: <PrimaryButton>Copy</PrimaryButton>,
};

export const ChatbotWhenLoading = ChatbotPhoneTemplate.bind({});
ChatbotWhenLoading.args = {
  disabled: true,
  isLoading: true,
};

export const WithIcon = WithIconTemplate.bind({});
WithIcon.args = {
  type: 'number',
  icon: '$',
};

export const Draggable = DraggableTemplate.bind({});
Draggable.args = { };

export const WithColor = WithColorTemplate.bind({});
WithColor.args = {
  color: '#f05454',
  value: '#f05454',
};
