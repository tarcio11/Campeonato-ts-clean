import { HttpPostClient, HttpStatusCode } from '@/data/protocols'

export class HttpPostClientSpy<T, R> implements HttpPostClient<T, R> {
  params?: HttpPostClient.Params<T>
  response: HttpPostClient.Response<R> = {
    statusCode: HttpStatusCode.ok
  }

  async post (params: HttpPostClient.Params<T>): Promise<HttpPostClient.Response<R>> {
    this.params = params
    return this.response
  }
}
