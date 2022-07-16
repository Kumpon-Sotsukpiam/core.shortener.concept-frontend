import ApiService, { authHeader } from './api.service'
import { AxiosRequestConfig } from 'axios'

class UserService {
  public get email(): string {
    const user = localStorage.getItem('user')
    return JSON.parse(user || '').email
  }

  public getUser() {
    const url = '/api/user'
    const requestOptions: AxiosRequestConfig = {
      method: 'GET',
      url,
      headers: {
        'Content-Type': 'application/json',
        ...authHeader(url),
      },
    }
    return ApiService(requestOptions)
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem('user', JSON.stringify(response.data.data))
        }
        return response.data
      })
      .catch((err) => {
        return err.response.data
      })
  }
}

export default new UserService()
