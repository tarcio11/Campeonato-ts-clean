import { HttpPostClient } from '@/data/protocols/http'

export class HttpPostClientSpy implements HttpPostClient {
  params?: HttpPostClient.Params

  async post (params: HttpPostClient.Params): Promise<void> {
    this.params = params
  }
}
