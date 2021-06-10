import { InvalidFieldError } from '@/validation/errors/invalid-field-error'
import { FieldValidation } from '@/validation/protocols'

export class MinLengthValidation implements FieldValidation {
  constructor (private readonly field: string) {}

  validate (input: object): Error {
    return new InvalidFieldError()
  }
}
