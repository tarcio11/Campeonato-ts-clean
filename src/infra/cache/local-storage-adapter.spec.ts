import { LocalStorageAdapter } from './local-storage-adapter'

import faker from 'faker'
import 'jest-localstorage-mock'

describe('LocalStorageAdapter', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  test('Should call localStorage.setItem with correct values', () => {
    const sut = new LocalStorageAdapter()
    const key = faker.database.column()
    const value = faker.random.objectElement<{}>()

    sut.set(key, value)

    expect(localStorage.setItem).toHaveBeenCalledWith(key, JSON.stringify(value))
  })
})
