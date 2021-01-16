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
  decorators: [
    (Story) => (
      <div style={{ width: '536px', margin: '0 auto', paddingTop: '1em' }}>
        <Story />
      </div>
    ),
  ],
};

const Default = (args) => <Input {...args} />;
const ChatbotPhone = (args) => <ChatbotPhoneInput {...args} />;
const IconInput = (args) => <InputWithIcon {...args} />;
const ColorIcon = (args) => <ColorInput {...args} />;
const DragIcon = (args) => <DraggableInput {...args} />;

export const Standard = Default.bind({});
Standard.args = {};

export const WithError = Default.bind({});
WithError.args = {
  error: "can't be less than 1",
};

export const ChatbotWithActionButton = ChatbotPhone.bind({});
ChatbotWithActionButton.args = {
  disabled: true,
  value: '+380123456789',
  actionButton: <PrimaryButton>Copy</PrimaryButton>,
};

export const ChatbotWhenLoading = ChatbotPhone.bind({});
ChatbotWhenLoading.args = {
  disabled: true,
  isLoading: true,
};

export const WithIcon = IconInput.bind({});
WithIcon.args = {
  type: 'number',
  icon: '$',
};

export const Draggable = DragIcon.bind({});
Draggable.args = { };

export const Colorful = ColorIcon.bind({});
Colorful.args = {
  color: '#f05454',
  value: '#f05454',
};
