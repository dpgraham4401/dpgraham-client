import axios from 'axios';

interface RequestOptions {
  url: string;
  method: string;
  // headers: object;
  data: object | null;
}

function request(method: string) {
  const baseURL = `${process.env.REACT_APP_API_URL}`;
  return (url: string, body: object | null) => {
    const requestOptions: RequestOptions = {
      url: `${baseURL}/${url}`,
      method,
      // headers: authHeader(`${baseURL}/${url}`),
      data: null,
    };
    if (body) {
      requestOptions.data = body;
    }
    return axios(requestOptions as any).then((response) => {
      const { data } = response;
      return data;
    });
  };
}

// eslint-disable-next-line import/prefer-default-export
const api = {
  get: request('GET'),
  post: request('POST'),
  put: request('PUT'),
  delete: request('DELETE'),
};

export default api;
