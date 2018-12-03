import * as axios from 'axios';
import store from '@/store';
import { Toast } from 'vant';
import { AxiosResponse, AxiosRequestConfig } from 'axios';

// 豆瓣电影的接口
const baseURL = 'https://api.douban.com/v2/movie/';
const service = axios.default.create({
  baseURL,
  timeout: 0,
  maxContentLength: 4000,
});

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (error: any) => {
    Promise.reject(error);
  },
);

service.interceptors.response.use(
  (response: AxiosResponse) => {
    if()
  }
)