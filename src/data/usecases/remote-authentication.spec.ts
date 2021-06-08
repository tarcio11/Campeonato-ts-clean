import { HttpPostClient } from '../protocols/http'
import { RemoteAuthentication } from './remote-authentication'

import faker from 'faker'

class HttpPostClientSpy implements HttpPostClient {
  url?: string

  async post (url: string): Promise<void> {
    this.url = url
  }
}

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    const url = faker.internet.url()
    const httpPostClientSpy = new HttpPostClientSpy()
    const authenticationParams = {
      email: faker.internet.email(),
      password: faker.internet.password()
    }
    const sut = new RemoteAuthentication(url, httpPostClientSpy)
    await sut.auth(authenticationParams)
    expect(httpPostClientSpy.url).toBe(url)
  })
})
