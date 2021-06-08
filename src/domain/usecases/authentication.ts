import { AccountModel } from '../models'

export interface Authentication {
  auth: (params: Authentication.Params) => Promise<Authentication.Response>
}

export namespace Authentication {
  export type Params = {
    email: string
    password: string
  }

  export type Response = AccountModel
}
