import { HttpPostClient } from '@/data/protocols'

import axios from 'axios'

export class AxiosHttpClient implements HttpPostClient<any, any> {
  async post (params: HttpPostClient.Params<any>): Promise<HttpPostClient.Response<any>> {
    await axios(params.url)
    return null
  }
}
