import axios from 'axios'
import config from 'config/api'

const APIConfig = {
  withCredentials: true,
}

const CreativesAPI = axios.create({
  ...APIConfig,
  baseURL: config.creativesAPIUrl,
})

export {
  CreativesAPI,
}
