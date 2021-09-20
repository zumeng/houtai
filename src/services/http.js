import axios from 'axios'
import { userCache } from '@/user'
// axios请求实例
const instance = axios.create({
  baseURL: 'http://192.168.0.105:8184/',
  timeout: 6000
})
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  if (config.method === 'get') {
    config.params.token = userCache.token
  } else {
    config.data.token = userCache.token
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})
// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response
}, function (error) {
// 对响应错误做点什么
  return Promise.reject(error)
})
const ajax = async (options) => {
  try {
    const reponse = await instance(options)
    return reponse
  } catch (err) {
    throw err
  }
}
const useAxios = {
  install (Vue) {
    Vue.prototype.$http = ajax
  }
}
export {
  ajax,
  useAxios
}
