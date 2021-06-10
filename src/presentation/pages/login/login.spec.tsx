import React from 'react'
import { fireEvent, render, RenderResult } from '@testing-library/react'
import { Login } from '@/presentation/pages'
import { Validation } from '@/presentation/protocols/validation'

class ValidationSpy implements Validation {
  input: object
  errorMessage: string

  validate (input: object): string {
    this.input = input
    return this.errorMessage
  }
}

type SutTypes = {
  sut: RenderResult
  validationSpy: ValidationSpy
}

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy()
  const sut = render(<Login validation={validationSpy} />)
  return {
    sut,
    validationSpy
  }
}

describe('Login Component', () => {
  test('Should start with initial state', () => {
    const { sut } = makeSut()
    const spinner = sut.getByTestId('spinner')
    expect(spinner.childElementCount).toBe(0)
    const submitButton = sut.getByTestId('submit') as HTMLButtonElement
    expect(submitButton.disabled).toBeTruthy()
  })

  test('Should call Validation with correct email', () => {
    const { sut, validationSpy } = makeSut()
    const emailInput = sut.getByPlaceholderText('Email')
    fireEvent.input(emailInput, { target: { value: 'any_email' } })
    expect(validationSpy.input).toEqual({
      email: 'any_email'
    })
  })
})
