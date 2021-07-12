import axios from 'axios';
import getToken from './utils/getToken';

const API = axios.create({
  baseURL: `http://emphasoft-test-assignment.herokuapp.com`,
});

const requestHandler = (request) => {
  const token = getToken();
  if (token)
    request.headers['Authorization'] = "Token " + token;

  return request;
};

const responseSuccessHandler = (response) => {
  return response;
};

const responseErrorHandler = (error) => {
  if (error.response.status === 401) {
    localStorage.removeItem('token');
    return window.location.href = '/login'
  }

  if (error.response) {
    console.error(error.response.data);
    console.error(error.response.status);
    console.error(error.response.headers);
  } else if (error.request) {
    console.error(error.request);
  } else {
    console.error('Error', error.message);
  }
  console.error(error.config);

  return Promise.reject(error);
};

API.interceptors.request.use(
  (request) => requestHandler(request)
);

API.interceptors.response.use(
  (response) => responseSuccessHandler(response),
  (error) => responseErrorHandler(error)
);

export default API;
