import { EmailValidation, MinLengthValidation, RequiredFieldsValidation, ValidationComposite } from '@/validation/validators'
import { makeLoginValidation } from './login-validation-factory'

describe('LoginValidationFactory', () => {
  test('Should make ValidationComposite with correct correct validation', () => {
    const composite = makeLoginValidation()

    expect(composite).toEqual(ValidationComposite.build([
      new RequiredFieldsValidation('email'),
      new EmailValidation('email'),
      new RequiredFieldsValidation('password'),
      new MinLengthValidation('password', 5)
    ]))
  })
})
