import fetchMock from 'jest-fetch-mock';

import { getExperiencesList, getBlocksList, getMergeFields } from './api';

fetchMock.enableMocks();

describe('API', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  describe('getExperiencesList', () => {
    it('filters body response', async () => {
      fetchMock.once(JSON.stringify({ data: [{ attributes: 'Hello' }] }));
      const body = await getExperiencesList();

      expect(body).toEqual(['Hello']);
    });
    it('makes request with correct args', async () => {
      fetchMock.once(JSON.stringify({ data: [{ attributes: 'Hello' }] }));
      const body = await getExperiencesList();

      expect(body).toEqual(['Hello']);

      const [url, params] = fetch.mock.calls[0];
      expect(url).toEqual('/api/v1/references/experiences?');
      expect(params.method).toEqual('GET');
    });

    it('makes request with correct params', async () => {
      fetchMock.once(JSON.stringify({ data: [{ attributes: 'Hello' }] }));
      const params = { initial: true };
      const body = await getExperiencesList(params);

      expect(body).toEqual(['Hello']);

      const [url] = fetch.mock.calls[0];
      expect(url).toEqual('/api/v1/references/experiences?initial=true');
    });

    describe('when request failed', () => {
      it('catch and reject promise', async () => {
        const error = new Error('fake error message');
        fetchMock.mockReject(error);

        try {
          await getExperiencesList();
        } catch (e) {
          expect(e).toEqual(error);
        }
      });
    });
  });

  describe('getBlocksList', () => {
    it('makes request with correct args', async () => {
      const experienceId = 'fake_id';
      fetchMock.once(JSON.stringify({ data: [{ attributes: 'Hello' }] }));
      const body = await getBlocksList(experienceId);

      expect(body).toEqual(['Hello']);

      const [url, params] = fetch.mock.calls[0];
      expect(url).toEqual(
        `/api/v1/references/experiences/${experienceId}/blocks?`,
      );
      expect(params.method).toEqual('GET');
    });

    it('makes request with correct params', async () => {
      const experienceId = 'fake_id';
      fetchMock.once(JSON.stringify({ data: [{ attributes: 'Hello' }] }));
      const params = { initial: true };
      const body = await getBlocksList(experienceId, params);

      expect(body).toEqual(['Hello']);

      const [url] = fetch.mock.calls[0];
      expect(url).toEqual(
        `/api/v1/references/experiences/${experienceId}/blocks?initial=true`,
      );
    });

    describe('when request failed', () => {
      it('catch and reject promise', async () => {
        const error = new Error('fake error message');
        fetchMock.mockReject(error);

        try {
          await getBlocksList();
        } catch (e) {
          expect(e).toEqual(error);
        }
      });
    });
  });

  describe('getMergeFields', () => {
    it('returns array of fields', async () => {
      const result = await getMergeFields();

      const expectedMergeFields = [
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
      ];
      expect(result).toEqual(expectedMergeFields);
    });
  });
});
