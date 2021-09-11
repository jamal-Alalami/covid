import Axios, { AxiosResponse, AxiosError, AxiosStatic } from 'axios';

let client = Axios.create({});

const onSuccess = function (response: AxiosResponse) {
  return response.data;
};

const onError = function (error: AxiosError) {
  if (Axios.isCancel(error)) {
    return Promise.reject(error);
  }
  if (error.response) {
    return Promise.reject(error.response.data);
  } else {
    console.log('Error Message:', error.message);
  }
  return Promise.reject(error);
};
client.interceptors.response.use(onSuccess, onError);
client.defaults.baseURL = 'https://api.covid19api.com';
const request = client as AxiosStatic;
export default request;
