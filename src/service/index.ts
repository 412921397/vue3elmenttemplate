import type { AxiosRequestHeaders } from "axios";

import QLRequest from "./request";
import { BASE_URL, TIME_OUT } from "./request/config";

const qlRequest = new QLRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带Token
      const token = "";
      if (token) {
        (config.headers as AxiosRequestHeaders).Authorization = `Bearer ${token}`;
      }

      console.log("请求成功的拦截");

      return config;
    },
    requestInterceptorCatch: (err) => {
      console.log("请求失败的拦截");
      return err;
    },
    responseInterceptor(res) {
      console.log("响应成功的拦截");
      return res;
    },
    responseInterceptorCatch(error) {
      console.log("响应失败的拦截");
      return error;
    }
  }
});

export default qlRequest;
