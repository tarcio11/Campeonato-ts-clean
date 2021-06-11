
import { HttpPostClient } from '@/data/protocols/http'

import axios, { AxiosResponse } from 'axios'

export class AxiosHttpClient implements HttpPostClient<any, any> {
  async post (data: HttpPostClient.Params<any>): Promise<HttpPostClient.Response<any>> {
    let axiosResponse: AxiosResponse
    try {
      axiosResponse = await axios.request({
        url: data.url,
        method: 'post',
        data: data.body
      })
    } catch (error) {
      axiosResponse = error.response
    }
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data
    }
  }
}
