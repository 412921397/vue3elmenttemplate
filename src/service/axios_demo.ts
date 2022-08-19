import axios from "axios";

// 1.模拟get请求
// axios
//   .get("http://httpbin.org/get", {
//     params: {
//       name: "why",
//       age: 18
//     }
//   })
//   .then((res) => {
//     console.log(res);
//   });

// axios
//   .post("http://httpbin.org/post", {
//     data: {
//       name: "why",
//       age: 20
//     }
//   })
//   .then((res) => {
//     console.log(res, "post");
//   });

// 额外补充的Promise中类型的使用
// Promise本身是可以有类型
// new Promise<string>((resolve, reject) => {
//   resolve("123");
// }).then((res) => {
//   console.log(res);
// });

// 2.axios的配置选项
// 2.1. 全局的配置
axios.defaults.baseURL = "http://httpbin.org";
axios.defaults.timeout = 10000;
// axios.defaults.headers = { name: "aa" };

// 2.2. 每一个请求单独的配置
// axios
//   .get("/get", {
//     params: {
//       name: "why",
//       age: 18
//     },
//     headers: {
//       names: "aaa"
//     }
//   })
//   .then((res) => {
//     console.log(res.data);
//   });

// axios
//   .post("/post", {
//     data: {
//       name: "why",
//       age: 20
//     }
//   })
//   .then((res) => {
//     console.log(res.data, "post");
//   });

// 3.axios.all -> 多个请求, 一起返回
axios
  .all([
    axios.get("/get", { params: { name: "why", age: 18 } }),
    axios.post("/post", { data: { name: "kobe", age: 30 } })
  ])
  .then((res) => {
    console.log(res[0].data);
    console.log(res[1].data);
  });

// 4.axios的拦截器
// fn1: 请求发送成功会执行的函数
// fn2: 请求发送失败会执行的函数
axios.interceptors.request.use(
  (config) => {
    // 想做的一些操作
    // 1.给请求添加token
    // 2.isLoading动画
    console.log("请求成功的拦截");
    return config;
  },
  (err) => {
    console.log("请求失败的拦截");
    return err;
  }
);

// fn1: 数据响应成功(服务器正常的返回了数据 20x)
// fn2: 数据响应失败(服务器正常的返回了数据 40x)
axios.interceptors.response.use(
  (res) => {
    console.log("响应成功的拦截");
    return res;
  },
  (err) => {
    console.log("响应失败的拦截");
    return err;
  }
);
