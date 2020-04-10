// 所有接口地址
const API = {
    //获取验证码图片
    getCode: {
        method: 'post',
        url: '/adm/base/captcha'
    },
    //获取用户配置
    getuser:{
        method: 'post',
        url: '/adm/buser/getBUserConfig'
    },
    //测试跨域接口
    testCross:{
        method:'post',
        url:'/getSms/'
    }
}
export default API