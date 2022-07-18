import ApiService, { authHeader } from './api.service'
import { AxiosRequestConfig } from 'axios'

class LinkService {
  public getLinks(offset: number = 0, limit: number = 5, search: string = '') {
    const url = '/api/link'
    const requestOptions: AxiosRequestConfig = {
      method: 'GET',
      url,
      headers: {
        'Content-Type': 'application/json',
        ...authHeader(url),
      },
      params: {
        offset,
        limit,
      },
    }
    if (search) {
      requestOptions.params['search'] = search
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
  public deleteLink(id: string) {
    const url = `/api/link/${id}`
    const requestOptions: AxiosRequestConfig = {
      method: 'DELETE',
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
}
export default new LinkService()
