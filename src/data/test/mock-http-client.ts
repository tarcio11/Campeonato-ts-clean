import { HttpPostClient } from '../protocols/http'

export class HttpPostClientSpy implements HttpPostClient {
  url?: string

  async post (url: string): Promise<void> {
    this.url = url
  }
}
