import request from '.';

const covidApi = {
  get: {
    key: 'getSummary',
    exec: () => request.get('/summary'),
  },
};

export { covidApi };
