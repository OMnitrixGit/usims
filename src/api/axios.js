import axios from 'axios'

// const baseUrl = 'http://10.241.110.10:9090'
const baseUrl = 'http://localhost:9091'

// create an axios instance
const service = axios.create({
    baseURL: baseUrl, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000, // request timeout
})

// request interceptor
service.interceptors.request.use(
    config => {
        // do something before request is sent
        const token = localStorage.getItem('accessToken');

        if (token) {
            // let each request carry token
            // ['accessToken'] is a custom headers key
            // please modify it according to the actual situation
            config.headers.accessToken = token
        }

        return config
    },
    error => {
        // do something with request error
        console.log(error) // for debug

        return Promise.reject(error)
    },
)

// response interceptor
service.interceptors.response.use(
    response => {
        const res = response.data
        if (res.status !== 0) {
            // store.dispatch('user/resetToken').then(() => {
            //   location.reload()
            // })

            return Promise.reject(new Error(res.message || 'Error'))
        }

        console.log('请求接口', response.config.url, '请求结果为', '====>', response.data)

        return res
    },
    error => {
        console.log(`err${error}`) // for debug

        return Promise.reject(error)
    },
)

export default service
