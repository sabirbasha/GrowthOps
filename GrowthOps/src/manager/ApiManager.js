import axios from 'axios';

export default function ApiManager(url, data) {
  return new Promise(async (resolve, reject) => {
    const headers = {
      'Content-Type': 'application/json',
    };
    axios
      .post(url, data, {
        headers: headers,
      })
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
}
