import axios from 'axios'

const api = axios.create()

// api.defaults.baseURL = ''
api.defaults.timeout = 30000
api.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
api.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest'
api.defaults.headers.post['mobile_login_token'] = ''

// 请求拦截
api.interceptors.request.use(
    function (config) {
        return config
    },
    function (error) {
        return Promise.reject(error)
    },
)

// 添加响应拦截器
api.interceptors.response.use(
    function (response) {
        return response
    },
    function (error) {
        return Promise.reject(error)
    },
)
export default api