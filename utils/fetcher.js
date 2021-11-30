import axios from 'axios';

export function fetcher(url) {
  return axios.get(url).then((res) => res.data);
}

export function salesBinderFetch(url) {
  return axios({
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    url,
    auth: {
      username: process.env.API_USERNAME,
      password: process.env.API_PASSWORD,
    }
  }).then((res) => res.data);
}
