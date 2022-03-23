//设置token有效期时间
const TOKEN_TIME_VALUE = 1000 * 60 * 60 * 2

//存入登录时时间
export const setTokenTime = () => {
  localStorage.setItem('tokentime', Date.now())
}
//获取登录时存入的时间
export const getTokenTime = () => {
  return localStorage.getItem('tokentime')
}
//判断此刻的时间减登录时的时间是否大于token有效期
export const diffTokenTime = () => {
  const currentTime = Date.now() //此刻时间
  const tokenTime = getTokenTime() //登录时存入的时间
  return currentTime - tokenTime > TOKEN_TIME_VALUE
}
