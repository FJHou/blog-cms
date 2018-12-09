import axios from 'axios';
// import querystring from "querystring";
// 接口地址

// axios 实例
const INSTANCE = axios.create({
  baseURL: '/api',
  timeout: 1000 * 12,
});


// 添加请求拦截器
INSTANCE.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
INSTANCE.interceptors.response.use(
  response => {
    return response.status === 200 ?
      Promise.resolve(response) :
      Promise.reject(response);
  },
  error => {
    const {
      response,
    } = error;
    if (response) {
      errHandler(response.status, response.data);
      return Promise.reject(error);
    }
  }
);

// 错误处理
function errHandler(status, message) {
  switch (status) {
    case 401:
      break;
    case 403:
      break;
    case 404:
      break;
    default:
      return message;
  }
}

export default INSTANCE;
