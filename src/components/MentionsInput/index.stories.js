import React from 'react';
import { MentionsInput } from './index';

export default {
  title: 'MentionsInput',
  component: MentionsInput,
  decorators: [
    (Story) => (
      <div style={{ height: '500px' }}>
        <div style={{ width: '536px', margin: '0 auto', paddingTop: '1em' }}>
          <Story />
        </div>
      </div>
    ),
  ],
};

const Template = (args) => <MentionsInput {...args} />;
const steps = [
  {
    type: 'experiences',
    title: 'Experiences',
    referencePrefix: 'experience_',
    loadList: getExperiencesList,
  },
  {
    type: 'blocks',
    title: 'Blocks',
    referencePrefix: 'block_',
    loadList: getBlocksList,
  },
  {
    type: 'merge_fields',
    title: 'Block merge fields',
    referencePrefix: '',
    loadList: getMergeFields,
  },
];

export const Textarea = Template.bind({});
Textarea.args = {
  steps,
  name: 'Name',
  defaultValue: '',
  placeholder: 'Search for experiences',
  experienceId: 1,
  textarea: true,
  readOnly: false,
};

export const Input = Template.bind({});
Input.args = {
  steps,
  name: 'Name',
  defaultValue: '',
  placeholder: 'Search for experiences',
  experienceId: 1,
  textarea: false,
  readOnly: true,
};

function getExperiencesList() {
  return new Promise(function(resolve) {
    resolve([
      { title: 'First Experience', value: '1', subTitle: 'This Experience' },
      { title: 'Second Experience', value: '2' },
      { title: 'Third Experience', value: '3' },
      { title: 'Fourth Experience', value: '4' },
      { title: 'Fifth Experience', value: '5' },
      { title: 'Sixth Experience', value: '6' },
      { title: 'Seventh Experience', value: '7' },
      { title: 'Eighth Experience', value: '8' },
      { title: 'Ninth Experience', value: '9' },
      { title: 'Tenth Experience', value: '10' },
    ]);
  });
}

function getBlocksList() {
  return new Promise(function(resolve) {
    resolve([
      { title: 'Wonderwall', value: '1', subTitle: 'Multiple Choice' },
      { title: 'Today is gonna be the day that theyre gonna throw it back to you', value: '2', subTitle: 'Free Response' },
      { title: 'By now, you should have somehow realised what you gotta do I dont believe that anybody feels the way I do about you now', value: '3', subTitle: 'Payment' },
      { title: 'Live Forever', value: '4', subTitle: 'Yes / No' },
      { title: 'Shakermaker', value: '5', subTitle: 'Data Fields' },
      { title: 'Slide Away', value: '6', subTitle: 'Content' },
    ]);
  });
}

function getMergeFields() {
  return new Promise(function(resolve) {
    resolve([
      { title: 'Full name', value: 'full_name' },
      { title: 'First name', value: 'first_name' },
      { title: 'Last name', value: 'last_name' },
      { title: 'Date of birth', value: 'date_of_birth' },
      { title: 'Email', value: 'email' },
      { title: 'Phone', value: 'phone' },
      { title: 'Address', value: 'address' },
      { title: 'City', value: 'city' },
      { title: 'State', value: 'state' },
      { title: 'Zip code', value: 'zip_code' },
      { title: 'Country', value: 'country' },
      { title: 'Currently employed', value: 'currently_employed' },
      { title: 'Company', value: 'company' },
      { title: 'Occupation', value: 'occupation' },
      { title: 'Payment amount', value: 'payment_amount' },
      { title: 'Payment type', value: 'payment_type' },
      { title: 'Multiple choice text', value: 'multiple_choice_text' },
      { title: 'Free response text', value: 'free_response_text' },
      { title: 'Yes/no text', value: 'yes_no_text' },
    ]);
  });
}
