import { RequiredFieldError } from '@/validation/errors'
import { FieldValidation } from '@/validation/protocols'

export class RequiredFieldsValidation implements FieldValidation {
  validate (input: object): Error {
    return new RequiredFieldError()
  }
}
