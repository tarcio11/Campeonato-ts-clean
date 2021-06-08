import { HttpResponse } from './http-response'

export interface HttpPostClient {
  post: (params: HttpPostClient.Params) => Promise<HttpPostClient.Response>
}

export namespace HttpPostClient {
  export type Params = {
    url: string
    body?: object
  }

  export type Response = HttpResponse
}
