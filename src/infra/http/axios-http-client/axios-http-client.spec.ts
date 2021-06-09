import { AxiosHttpClient } from './axios-http-client'
import { HttpPostClient } from '@/data/protocols'
import { mockAxios } from '@/infra/test'

import faker from 'faker'
import axios from 'axios'

jest.mock('axios')

type SutTypes = {
  sut: AxiosHttpClient
  mockedAxios: jest.Mocked<typeof axios>
}

const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient()
  const mockedAxios = mockAxios()
  return {
    sut,
    mockedAxios
  }
}

const mockRequest = (): HttpPostClient.Params<any> => ({
  url: faker.internet.url(),
  body: faker.random.objectElement()
})

describe('AxiosHttpClient', () => {
  test('Should call axios with correct values', async () => {
    const request = mockRequest()
    const { sut, mockedAxios } = makeSut()
    await sut.post(request)
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
  })

  test('Should return correct response', async () => {
    const { sut, mockedAxios } = makeSut()
    const httpResponse = await sut.post(mockRequest())
    const axiosResponse = await mockedAxios.post.mock.results[0].value
    expect(httpResponse).toEqual(axiosResponse)
  })
})
