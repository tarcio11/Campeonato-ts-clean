import { AxiosHttpClient } from './axios-http-client'

import axios from 'axios'
import faker from 'faker'
import { HttpPostClient } from '@/data/protocols'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>
const mockedResult = ({
  data: faker.random.objectElement(),
  status: faker.datatype.number()
})
mockedAxios.post.mockResolvedValue(mockedResult)

const makeSut = (): AxiosHttpClient => new AxiosHttpClient()

const mockRequest = (): HttpPostClient.Params<any> => ({
  url: faker.internet.url(),
  body: faker.random.objectElement()
})

describe('AxiosHttpClient', () => {
  test('Should call axios with correct values', async () => {
    const request = mockRequest()
    const sut = makeSut()
    await sut.post(request)
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
  })

  test('Should return correct response', async () => {
    const sut = makeSut()
    const httpResponse = await sut.post(mockRequest())
    expect(httpResponse).toEqual(mockedResult)
  })
})
