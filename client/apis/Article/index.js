import axios from '../axios.config.js';

function articleSave(val) {
  return axios.post('/article/save', {
    ...val,
  });
}

function articleListGet(val) {
  return axios.post('/article/list', {
    ...val,
  });
}

export {
  articleSave,
  articleListGet,
};
