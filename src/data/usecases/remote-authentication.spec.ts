import { RemoteAuthentication } from './remote-authentication'
import { HttpPostClientSpy } from '../test/mock-http-client'

import faker from 'faker'

const authenticationParams = {
  email: faker.internet.email(),
  password: faker.internet.password()
}

type SutTypes = {
  sut: RemoteAuthentication
  httpPostClientSpy: HttpPostClientSpy
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy()
  const sut = new RemoteAuthentication(url, httpPostClientSpy)
  return {
    sut,
    httpPostClientSpy
  }
}

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    const url = faker.internet.url()
    const { sut, httpPostClientSpy } = makeSut(url)
    await sut.auth(authenticationParams)
    expect(httpPostClientSpy.params.url).toBe(url)
  })
})
