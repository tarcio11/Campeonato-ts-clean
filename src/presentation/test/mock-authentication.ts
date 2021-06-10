import { mockAccountModel } from '@/domain/test'
import { Authentication } from '@/domain/usecases'

export class AuthenticationSpy implements Authentication {
  params: Authentication.Params
  response = mockAccountModel()
  callsCount = 0

  async auth (params: Authentication.Params): Promise<Authentication.Response> {
    this.params = params
    this.callsCount++
    return this.response
  }
}
