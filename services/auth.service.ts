import ApiService, { authHeader } from './api.service'
import Router from 'next/router'
import { AxiosRequestConfig } from 'axios'

class AuthService {
  public get token() {
    return localStorage.getItem('token')
  }

  public login(email: string, password: string) {
    const url = '/api/auth/login'
    const requestOptions: AxiosRequestConfig = {
      method: 'POST',
      url,
      headers: {
        'Content-Type': 'application/json',
        ...authHeader(url),
      },
      data: { email, password },
    }
    return ApiService(requestOptions)
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem(
            'token',
            JSON.stringify(response.data.data.access_token)
          )
        }
        return response.data
      })
      .catch((err) => {
        return err.response.data
      })
  }
  public signup(email: string, password: string) {
    const url = '/api/auth/signup'
    const requestOptions: AxiosRequestConfig = {
      method: 'POST',
      url,
      headers: {
        'Content-Type': 'application/json',
        ...authHeader(url),
      },
      data: { email, password },
    }
    return ApiService(requestOptions)
      .then((response) => {
        return response.data
      })
      .catch((err) => {
        return err.response.data
      })
  }
  public apikey() {
    const url = '/api/auth/apikey'
    const requestOptions: AxiosRequestConfig = {
      method: 'POST',
      url,
      headers: {
        'Content-Type': 'application/json',
        ...authHeader(url),
      },
    }
    return ApiService(requestOptions)
      .then((response) => {
        return response.data
      })
      .catch((err) => {
        return err.response.data
      })
  }
  public logout() {
    localStorage.removeItem('token')
    Router.push('/auth/signin/identifier')
  }
}
export default new AuthService()
