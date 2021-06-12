import { mockAccountModel } from '@/domain/test'
import { AddAccount } from '@/domain/usecases'

export class AddAccountSpy implements AddAccount {
  params: AddAccount.Params
  callsCount = 0
  response = mockAccountModel()

  async add (params: AddAccount.Params): Promise<AddAccount.Response> {
    this.params = params
    this.callsCount++
    return this.response
  }
}
