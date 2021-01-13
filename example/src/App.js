import React from 'react';
import { MentionsInput } from 'ha-react';
import wretch from 'wretch';

function getExperiencesList(params) {
  return new Promise(function(resolve, reject) {
    wretch('/api/v1/references/experiences')
      .query(params)
      .get()
      .json((json) => {
        resolve(json.data.map((item) => item.attributes));
      })
      .catch(reject);
  });
}

function getBlocksList(experienceId, params) {
  return new Promise(function(resolve, reject) {
    wretch(`/api/v1/references/experiences/${experienceId}/blocks`)
      .query(params)
      .get()
      .json((json) => {
        resolve(json.data.map((item) => item.attributes));
      })
      .catch(reject);
  });
}

function getMediaField() {
  return new Promise(function(resolve) {
    resolve([
      { title: 'Media', value: 'media' },
    ]);
  });
}

const queryParams = { block_type: 'free_response' };
const mentionSteps = [
  {
    type: 'experiences',
    title: 'Experiences',
    referencePrefix: 'experience_',
    loadList: () => getExperiencesList(queryParams),
  },
  {
    type: 'blocks',
    title: 'Blocks',
    referencePrefix: 'block_',
    loadList: (experienceId) => getBlocksList(experienceId, queryParams),
  },
  {
    type: 'merge_fields',
    title: 'Block merge fields',
    referencePrefix: '',
    loadList: getMediaField,
  },
];

const App = () => {
  return (
    <MentionsInput
      name="ask[reference_merge_media]"
      defaultValue="Readonly"
      placeholder="Search free response blocks"
      experienceId="y8gnzWeR"
      steps={mentionSteps}
      readOnly
    />
  );
};

export default App;
