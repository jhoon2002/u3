import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.VUE_APP_WAS,
})

instance.interceptors.request.use(
    (config) => {
        return config
    },
    function (error) {
        return Promise.reject(error)
    },
)

instance.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        return Promise.reject(error)
    },
)

export default instance