import axios from 'axios'
import { ElMessage } from 'element-plus'
// const baseURL = process.env.VUE_APP_BASE_API
const baseURL = 'https://lianghj.top:8888/api/private/v1/'
const service = axios.create({
  baseURL,
  timeout: 5000
})

// 响应拦截器
axios.interceptors.response.use(
  (response) => {
    console.log(response)
    const { data, meta } = response.data
    if (meta.status === 200 || meta.status === 201) {
      return data
    } else {
      ElMessage.error(meta.msg)
      return Promise.reject(new Error(meta.msg))
    }
  },
  (error) => {
    console.log(error.response)
    error.response && ElMessage.error(error.response.data)
    return Promise.reject(new Error(error.response.data))
  }
)

// post请求
export const Post = (url, data) => {
  return axios({
    method: 'POST',
    url: `${baseURL}${url}`,
    data
  })
}
// put请求
export const Put = (url, data) => {
  return axios({
    method: 'put',
    url: `${baseURL}${url}`,
    data
  })
}
// get请求
export const Get = (url, params) => {
  return axios({
    method: 'get',
    url: `${baseURL}${url}`,
    params
  })
}

// delete请求
export const Delete = (url, params) => {
  return axios({
    method: 'delete',
    url: `${baseURL}${url}`,
    params
  })
}
export default service
