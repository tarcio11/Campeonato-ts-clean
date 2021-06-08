import { RemoteAuthentication } from './remote-authentication'
import { HttpPostClientSpy } from '../test/mock-http-client'

import faker from 'faker'

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
