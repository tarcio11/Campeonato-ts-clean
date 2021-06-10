import { EmailValidation } from './email-validation'
import { InvalidFieldError } from '@/validation/errors/invalid-field-error'

import faker from 'faker'

describe('EmailValidation', () => {
  test('Should return error if email is invalid', () => {
    const field = faker.database.column()
    const sut = new EmailValidation(field)
    const error = sut.validate({ [field]: faker.random.word() })
    expect(error).toEqual(new InvalidFieldError())
  })

  test('Should return false if email is valid', () => {
    const field = faker.database.column()
    const sut = new EmailValidation(field)
    const error = sut.validate({ [field]: faker.internet.email() })
    expect(error).toBeFalsy()
  })
})
