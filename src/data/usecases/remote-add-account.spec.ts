import { RemoteAddAccount } from './remote-add-account'
import { mockAddAccountParams } from '@/domain/test'
import { AddAccount } from '@/domain/usecases'
import { HttpPostClientSpy } from '../test'
import faker from 'faker'

type SutTypes = {
  sut: RemoteAddAccount
  httpPostClientSpy: HttpPostClientSpy<AddAccount.Params, AddAccount.Response>
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy<AddAccount.Params, AddAccount.Response>()
  const sut = new RemoteAddAccount(url, httpPostClientSpy)
  return {
    sut,
    httpPostClientSpy
  }
}

describe('RemoteAddAccount', () => {
  test('Should call HttpPostClient with correct values', async () => {
    const url = faker.internet.url()
    const { sut, httpPostClientSpy } = makeSut(url)
    const addAccountParams = mockAddAccountParams()
    await sut.add(addAccountParams)
    expect(httpPostClientSpy.params.url).toBe(url)
    expect(httpPostClientSpy.params.body).toEqual(addAccountParams)
  })
})
