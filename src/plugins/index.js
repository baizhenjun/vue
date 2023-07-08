import requests from "./axios";  //引入二次封装的axios
const test = (params)=>requests({url:'user/test',method:'post',data:params});
export { test }