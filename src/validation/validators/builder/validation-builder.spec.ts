import { ValidationBuilder as sut, RequiredFieldsValidation, EmailValidation, MinLengthValidation } from '@/validation/validators'

import faker from 'faker'

describe('ValidationBuilder', () => {
  test('Should return RequiredBuilderValidation', () => {
    const field = faker.database.column()
    const validations = sut.field(field).required().build()
    expect(validations).toEqual([new RequiredFieldsValidation(field)])
  })

  test('Should return EmailValidation', () => {
    const field = faker.database.column()

    const validations = sut.field(field).email().build()

    expect(validations).toEqual([new EmailValidation(field)])
  })

  test('Should return MinLengthValidation', () => {
    const field = faker.database.column()
    const length = faker.datatype.number()

    const validations = sut.field(field).min(length).build()

    expect(validations).toEqual([new MinLengthValidation(field, length)])
  })

  test('Should return a list of validations', () => {
    const field = faker.database.column()
    const length = faker.datatype.number()

    const validations = sut.field(field).required().min(length).email().build()

    expect(validations).toEqual([
      new RequiredFieldsValidation(field),
      new MinLengthValidation(field, length),
      new EmailValidation(field)
    ])
  })
})
