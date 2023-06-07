import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config'

class KLRequest {
  constructor(baseURL, timeout) {
    // 创建请求对象axios 同时配置默认值
    this.instance = axios.create({
      baseURL,
      timeout
    })

    // 响应拦截器 成功和失败
    this.instance.interceptors.response.use(res => {
      return res.data
    }, err => {
      return err
    })
  }

  request(config) {
    return this.instance.request(config)
  }

  get(config) {
    return this.request({ ...config, method: 'get' })
  }

  post(config) {
    return this.request({ ...config, method: 'post' })
  }
}

// 创建对象的同时给他默认配置
export default new KLRequest(BASE_URL, TIMEOUT)