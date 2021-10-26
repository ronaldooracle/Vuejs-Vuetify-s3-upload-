import api from './api';

const headers = {
  'Content-Type': 'multipart/form-data; boundary=---011000010111000001101001',
};


// export const postupload = (files) => {
//   const formData = new FormData();
//   // eslint-disable-next-line no-restricted-syntax
//   for (const file of files) {
//     formData.append('files', file, file.name);
//   }

//   return api.post('upload', formData, headers);
// };

export const postupload = (file) => {
  const formData = new FormData();
  formData.append('file', file, file.name);

  return api.post('upload', formData, headers);
};

export default {
  postupload,
};
