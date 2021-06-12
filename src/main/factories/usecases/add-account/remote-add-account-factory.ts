import { RemoteAddAccount } from '@/data/usecases/remote-add-account'
import { makeApiUrl } from '../../http/api-url-factory'
import { makeAxiosHttpClient } from '../../http/axios-http-client-facotry'

export const makeRemoteAddAccount = (): RemoteAddAccount => {
  return new RemoteAddAccount(makeApiUrl('/signup'), makeAxiosHttpClient())
}
