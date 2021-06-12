import { AccountModel } from '../models'

export interface AddAccount {
  add: (params: AddAccount.Params) => Promise<AddAccount.Response>
}

export namespace AddAccount {
  export type Params = {
    name: string
    email: string
    password: string
  }

  export type Response = AccountModel
}
