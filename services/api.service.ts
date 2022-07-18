import axios from 'axios'
// import getConfig from 'next/config';
import authService from './auth.service'

const API_URL = <string>process.env.BASEURL
// const { publicRuntimeConfig } = getConfig();

const ApiService = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})
const authHeader = (
  url: string
): {
  Authorization?: string
} => {
  const token = authService.token
  // const isApiUrl = url.startsWith(publicRuntimeConfig.apiUrl);
  if (token /*&& isApiUrl*/) {
    return { Authorization: `Bearer ${token}` }
  } else {
    return {}
  }
}

export default ApiService
export { authHeader }
