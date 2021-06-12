import { mockAccountModel } from '@/domain/test'
import { AddAccount } from '@/domain/usecases'

export class AddAccountSpy implements AddAccount {
  params: AddAccount.Params
  response = mockAccountModel()

  async add (params: AddAccount.Params): Promise<AddAccount.Response> {
    this.params = params
    return this.response
  }
}
