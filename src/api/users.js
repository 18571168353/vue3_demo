import request from '@/utils/request'

export const getUser = (params) => {
  return request({
    url: '/users',
    method: 'Get',
    params
  })
}
