import { mockAccountModel } from '@/domain/test'
import { Authentication } from '@/domain/usecases'
import { Validation } from '@/presentation/protocols'

export class ValidationStub implements Validation {
  errorMessage: string

  validate (fieldName: string, fieldValue: string): string {
    return this.errorMessage
  }
}

export class AuthenticationSpy implements Authentication {
  params: Authentication.Params
  response = mockAccountModel()

  async auth (params: Authentication.Params): Promise<Authentication.Response> {
    this.params = params
    return this.response
  }
}
