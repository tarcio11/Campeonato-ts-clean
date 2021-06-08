import { HttpPostClient, HttpStatusCode } from '@/data/protocols/http'

export class HttpPostClientSpy implements HttpPostClient {
  params?: HttpPostClient.Params
  response: HttpPostClient.Response = {
    statusCode: HttpStatusCode.ok
  }

  async post (params: HttpPostClient.Params): Promise<HttpPostClient.Response> {
    this.params = params
    return this.response
  }
}
