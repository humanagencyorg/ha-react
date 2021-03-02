import React from 'react';
import {
  Button,
  PrimaryButton,
  SubmissionButton,
  NewItemButton,
  SmallDeleteButton,
  PrimaryLinkButton,
  ChatbotLoadingButton,
} from './index';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const StandardButtonTemplate = (args) => <Button {...args} />;
const ButtonWithLongTitleTemplate = (args) => <Button {...args} />;
const PrimaryTemplate = (args) => <PrimaryButton {...args} />;
const SubmissionTemplate = (args) => <SubmissionButton {...args} />;
const NewItemTemplate = (args) => <NewItemButton {...args} />;
const SmallDeleteTemplate = (args) => <SmallDeleteButton {...args} />;
const PrimaryLinkTemplate = (args) => <PrimaryLinkButton {...args} />;
const ChatbotLoadingTemplate = (args) => <ChatbotLoadingButton {...args} />;

export const Primary = PrimaryTemplate.bind({});
Primary.args = {
  children: 'Save Changes',
  responsive: true,
};

export const PrimaryDisabled = PrimaryTemplate.bind({});
PrimaryDisabled.args = {
  children: 'Disabled',
  disabled: true,
};

export const StandardButton = StandardButtonTemplate.bind({});
StandardButton.args = {
  children: 'Save Changes',
};

export const ButtonWithLongTitle = ButtonWithLongTitleTemplate.bind({});
ButtonWithLongTitle.args = {
  children: 'Very very very very very very very very very very very very long title of the button',
  responsive: true,
};

export const Submission = SubmissionTemplate.bind({});
Submission.args = {
  children: 'Save Changes',
};

export const NewItem = NewItemTemplate.bind({});
NewItem.args = {
  children: '+ Add Item',
  noMargin: true,
};

export const SmallDelete = SmallDeleteTemplate.bind({});
SmallDelete.args = {
  children: '-',
};

export const PrimaryLink = PrimaryLinkTemplate.bind({});
PrimaryLink.args = {
  children: 'Try the bot',
};

export const ChatbotLoading = ChatbotLoadingTemplate.bind({});
ChatbotLoading.args = {
  children: 'Creating your bot...',
  isLoading: true,
  disabled: true,
};
