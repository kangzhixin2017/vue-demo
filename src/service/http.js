import service from './api'
import axios from 'axios'


//声明请求实例
let instance = axios.create({
    baseURL: 'http://118.190.206.204:8001',
    // baseURL: '/api', //测试跨域地址
    timeout: 5000
})

//循环遍历api对象
const http = {};

for (let key in service) {
    let api = service[key];
    http[key] = async function (params, isFormData = false, config = {}) {
        let newParams = {}
        if (params && isFormData) {
            newParams = new FormData()
            for (let i in params) {
                newParams.append(i, params[i])
            }
        } else {
            newParams = params
        }
        //不同请求的判断
        let response = {};
        if (api.method === 'put' || api.method === 'post' || api.method === 'patch') {
            try {
                response = await instance[api.method](api.url, newParams, config)
            } catch (err) {
                response = err;
            }
        } else if (api.method === 'delete' || api.method === 'get') {
            config.params = newParams
            try {
                response = await instance[api.method](api.url, config)
            } catch (err) {
                response = err;
            }
        }
        return response
    }
}
//拦截器 
//请求拦截器
instance.interceptors.request.use(config => {
    console.log('请求')
    let token = window.sessionStorage.getItem('token')
    if (token) {
        config.headers['x-token'] = sessionStorage.getItem('token')
    }
    return config
}, () => {
    console.log('请求错误')
})
//响应拦截器
instance.interceptors.response.use(res => {
    console.log('响应')
    return res
}, () => {
    console.log('响应失败')
    // return Promise.reject(err)
})

export default http