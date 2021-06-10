import { RequiredFieldsValidation } from './required-field-validation'
import { RequiredFieldError } from '@/validation/errors'

import faker from 'faker'

describe('RequiredFieldsValidation', () => {
  test('Should return error if field is empty', () => {
    const field = faker.database.column()
    const sut = new RequiredFieldsValidation(field)
    const error = sut.validate({ [field]: '' })
    expect(error).toEqual(new RequiredFieldError())
  })

  test('Should return falsy if field not empty', () => {
    const field = faker.database.column()
    const sut = new RequiredFieldsValidation(field)
    const error = sut.validate({ [field]: faker.random.word() })
    expect(error).toBeFalsy()
  })
})
