import { fireEvent, RenderResult } from '@testing-library/react'
import faker from 'faker'

export const testStatusForField = (sut: RenderResult, fieldName: string, validationError: string = ''): void => {
  const field = sut.getByPlaceholderText(fieldName)
  expect(field.title).toBe(validationError)
}

export const populateField = (sut: RenderResult, fieldName: string, value = faker.random.word()): void => {
  const input = sut.getByPlaceholderText(fieldName)
  fireEvent.input(input, { target: { value } })
}
