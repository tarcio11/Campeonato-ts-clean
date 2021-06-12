import React from 'react'
import 'jest-localstorage-mock'
import { fireEvent, render, RenderResult } from '@testing-library/react'
import { SignUp } from '@/presentation/pages'
import faker from 'faker'
import { ValidationStub } from '@/presentation/test'

type SutTypes = {
  sut: RenderResult
}

type SutParams = {
  validationError: string
}

const makeSut = (params?: SutParams): SutTypes => {
  const validationStub = new ValidationStub()
  validationStub.errorMessage = params?.validationError
  const sut = render(
      <SignUp validation={validationStub} />
  )
  return {
    sut
  }
}

export const testStatusForField = (sut: RenderResult, fieldName: string, validationError: string = ''): void => {
  const field = sut.getByPlaceholderText(fieldName)
  expect(field.title).toBe(validationError)
}

const populateField = (sut: RenderResult, fieldName: string, value = faker.random.word()): void => {
  const input = sut.getByPlaceholderText(fieldName)
  fireEvent.input(input, { target: { value } })
}

describe('Login Component', () => {
  beforeAll(() => {
    localStorage.clear()
  })

  test('Should start with initial state', () => {
    const { sut } = makeSut()
    const spinner = sut.getByTestId('spinner')
    expect(spinner.childElementCount).toBe(0)
    const submitButton = sut.getByTestId('submit') as HTMLButtonElement
    expect(submitButton.disabled).toBeTruthy()
  })

  test('Should show email error if Validation fails', () => {
    const validationError = faker.random.words()
    const { sut } = makeSut({ validationError })
    populateField(sut, 'Nome')
    testStatusForField(sut, 'Nome', validationError)
  })
})
