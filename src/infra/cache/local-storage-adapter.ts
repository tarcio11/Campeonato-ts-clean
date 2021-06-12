import { SetStorage } from '@/data/protocols'

export class LocalStorageAdapter implements SetStorage {
  set (key: string, value: object): void {
    return value
      ? localStorage.setItem(key, JSON.stringify(value))
      : localStorage.removeItem(key)
  }
}
