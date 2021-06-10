import { FieldValidation } from '@/validation/protocols'
import { EmailValidation, RequiredFieldsValidation } from '@/validation/validators'

export class ValidationBuilder {
  private constructor (
    private readonly fieldName: string,
    private readonly validations: FieldValidation[]
  ) {}

  static field (field: string): ValidationBuilder {
    return new ValidationBuilder(field, [])
  }

  required (): ValidationBuilder {
    this.validations.push(new RequiredFieldsValidation(this.fieldName))
    return this
  }

  email (): ValidationBuilder {
    this.validations.push(new EmailValidation(this.fieldName))
    return this
  }

  build (): FieldValidation[] {
    return this.validations
  }
}
