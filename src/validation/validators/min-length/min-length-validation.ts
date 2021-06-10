import { InvalidFieldError } from '@/validation/errors/invalid-field-error'
import { FieldValidation } from '@/validation/protocols'

export class MinLengthValidation implements FieldValidation {
  constructor (
    private readonly field: string,
    private readonly minLength: number
  ) {}

  validate (input: object): Error {
    return input[this.field]?.length < this.minLength ? new InvalidFieldError() : null
  }
}