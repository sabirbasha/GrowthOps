import ApiManager from '../manager/ApiManager';

export const getAllBills = (url, data) => {
  return new Promise((resolve, reject) => {
    ApiManager(url, data)
      .then(respone => {
        resolve(respone);
      })
      .catch(error => {
        reject(error);
      });
  });
};
