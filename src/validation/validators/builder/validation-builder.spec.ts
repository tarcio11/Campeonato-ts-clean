import { ValidationBuilder as sut, RequiredFieldsValidation } from '@/validation/validators'

import faker from 'faker'

describe('ValidationBuilder', () => {
  test('Should return RequiredBuilderValidation', () => {
    const field = faker.database.column()
    const validations = sut.field(field).required().build()
    expect(validations).toEqual([new RequiredFieldsValidation(field)])
  })
})
