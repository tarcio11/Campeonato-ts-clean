import { InvalidFieldError } from '@/validation/errors/invalid-field-error'
import { MinLengthValidation } from './min-length-validation'

import faker from 'faker'

describe('MinLengthValidation', () => {
  test('Should return error if value is invalid', () => {
    const field = faker.database.column()
    const sut = new MinLengthValidation(field)
    const error = sut.validate({ [field]: faker.random.alphaNumeric(4) })
    expect(error).toEqual(new InvalidFieldError())
  })
})
