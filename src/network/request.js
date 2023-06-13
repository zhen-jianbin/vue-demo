import axios from "axios";
import { ElMessage } from "element-plus";

export function request(config) {
  // http://api.jqrjq.cn/api/mobile/elogin

  const instance = axios.create({
    baseURL: "http://api.jqrjq.cn",
    timeout: 60000,
  });
  instance.interceptors.request.use(
    (config) => {
      const userinfo = JSON.parse(
        window.sessionStorage.getItem("userinfo") || "{}"
      );
      config.headers["token"] = userinfo?.token;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  instance.interceptors.response.use(
    (res) => {
      if (res.data.code === 1) {
        return res.data;
      } else {
        ElMessage.error(res.data.msg);
      }
    },
    (error) => {
      ElMessage.error(error.response.data.msg);
      return Promise.reject(error);
    }
  );
  return instance(config);
}
