/* //获取用户信息
export const getUserInfo = ()=>{
    return localStorage.getItem('userInfo') || {};
}
// 获取用户登录token
export const getToken = ()=>{
    return localStorage.getItem('token') || {};
}

// 设置token
export const setToken = (token)=>{
    localStorage.setItem('token', token);
}
// 设置用户信息
export const setUserinfo = (user)=>{
    localStorage.setItem('userInfo', user);
}

//清除登陆信息
export const removeCache = ()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('userInfo')
} */
class UserCache {
  get userInfo () {
    let user = localStorage.getItem('userInfo')
    if (user && /^\{/.test(user)) {
      user = JSON.parse(user)
    }
    return user || {}
  }
  set userInfo (user) {
    let _user = ''
    /// TODO
    if (typeof user === 'object') {
      _user = JSON.stringify(user)
    }
    localStorage.setItem('userInfo', _user)
  }

  get token () {
    return localStorage.getItem('token') || ''
  }
  set token (token) {
    localStorage.setItem('token', token)
  }
  destroy () {
    localStorage.removeItem('token')
    localStorage.removeItem('userInfo')
  }
}
export const userCache = new UserCache()
// const userInfo = new UserCache()
