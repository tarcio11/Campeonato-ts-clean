import { AddAccount } from '@/domain/usecases'
import { HttpPostClient } from '../protocols'

export class RemoteAddAccount implements AddAccount {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<AddAccount.Params, AddAccount.Response>
  ) {}

  async add (params: AddAccount.Params): Promise<AddAccount.Response> {
    await this.httpPostClient.post({
      url: this.url,
      body: params
    })
    return null
  }
}
