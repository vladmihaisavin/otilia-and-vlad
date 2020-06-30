import axios from 'axios'

const getOptions = (token) => {
    const options = {
        baseURL: '/.netlify/functions',
        timeout: 5000,
        headers: {
            'Accepts': 'application/json',
            'Content-Type': 'application/json',
        },
        validateStatus: (status) => {
            return status < 500
        }
    }
    if (token) {
        options.headers['Authorization'] = `Bearer ${ token }`
    }
    return options
}

export const getAuthHttpClient = (token) => {
    return axios.create(getOptions(token))
}