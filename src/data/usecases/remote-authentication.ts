import { Authentication } from '../../domain/usecases'
import { HttpPostClient } from '../protocols/http'

export class RemoteAuthentication implements Authentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) {}

  async auth (params: Authentication.Params): Promise<Authentication.Response> {
    await this.httpPostClient.post(this.url)
    return null
  }
}
