import axios from 'axios'

const instance = axios.create({
    // baseURL: process.env.VUE_APP_WAS,
    // baseURL: import.meta.env.VITE_VUE_APP_WAS,
})

instance.interceptors.request.use(
    config => {
        console.log('config.headers', config)

        return config
    },
    function (error) {
        return Promise.reject(error)
    },
)

instance.interceptors.response.use(
    response => {
        return response
    },
    error => {
        return Promise.reject(error)
    },
)

export default instance
