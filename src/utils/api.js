import axios from 'axios';

const CLIENT_ID = '26a9fb6a926836bc77b7';
const CLIENT_SECRET = 'db08c23916375e6782dee0e189ed026628d53d39';

const API_PARAMS = `client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
const ROOT_URL = 'https://api.github.com';



function getTopUsersByCountry (country) {
  return axios.get(`${ROOT_URL}/search/users?${API_PARAMS}&q=+location:${country}&sort=followers&per_page=10`)
    .then(function (resp) {
      return resp.items;
    });
}

function handleError (error) {
  console.warn(error);
  return null;
}


export default { getTopUsersByCountry };