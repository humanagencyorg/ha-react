import wretch from 'wretch';

export function getExperiencesList(params) {
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

export function getBlocksList(experienceId, params) {
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

export function getMergeFields() {
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

export function getMediaField() {
  return new Promise(function(resolve) {
    resolve([
      { title: 'Media', value: 'media' },
    ]);
  });
}
