import React from 'react';
import { Input, ChatbotPhoneInput } from './index';
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

export const Standard = Default.bind({});
Standard.args = {};

export const StandardWithError = Default.bind({});
StandardWithError.args = {
  error: "can't be less than 1",
};

export const ChatbotWithActionButton = ChatbotPhone.bind({});
ChatbotWithActionButton.args = {
  disabled: true,
  value: '+380123456789',
  actionButton: (
    <PrimaryButton >
      Copy
    </PrimaryButton>
  ),
};

export const ChatbotWhenLoading = ChatbotPhone.bind({});
ChatbotWhenLoading.args = {
  disabled: true,
  isLoading: true,
};
