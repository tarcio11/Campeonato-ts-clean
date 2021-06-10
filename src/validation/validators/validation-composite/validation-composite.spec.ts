import { ValidationComposite } from './validation-composite'
import { FieldValidation } from '@/validation/protocols'

import faker from 'faker'

describe('ValidationComposite', () => {
  test('Should return error if any validation fails', () => {
    class FieldValidationSpy implements FieldValidation {
      error: Error = null

      constructor (readonly field: string) {}

      validate (input: object): Error {
        return this.error
      }
    }
    const fieldName = faker.database.column()
    const fieldValidationSpy = [
      new FieldValidationSpy(fieldName),
      new FieldValidationSpy(fieldName)
    ]
    const sut = new ValidationComposite(fieldValidationSpy)
    const error = sut.validate(fieldName, { [fieldName]: faker.random.word() })
    expect(error).toBeFalsy()
  })
})
