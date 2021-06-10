import React from 'react'
import { fireEvent, render, RenderResult } from '@testing-library/react'
import { Login } from '@/presentation/pages'
import { ValidationStub } from '@/presentation/test'
import faker from 'faker'

type SutTypes = {
  sut: RenderResult
  validationStub: ValidationStub
}

const makeSut = (): SutTypes => {
  const validationStub = new ValidationStub()
  validationStub.errorMessage = faker.random.words()
  const sut = render(<Login validation={validationStub} />)
  return {
    sut,
    validationStub
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

  test('Should show email error if Validation fails', () => {
    const { sut, validationStub } = makeSut()
    const emailInput = sut.getByPlaceholderText('Email')
    fireEvent.input(emailInput, { target: { value: faker.internet.email() } })
    const emailStatus = sut.getByPlaceholderText('Email')
    expect(emailStatus.title).toBe(validationStub.errorMessage)
  })

  test('Should show password error if Validation fails', () => {
    const { sut, validationStub } = makeSut()
    const passwordInput = sut.getByPlaceholderText('Senha')
    fireEvent.input(passwordInput, { target: { value: faker.internet.password() } })
    const passwordStatus = sut.getByPlaceholderText('Senha')
    expect(passwordStatus.title).toBe(validationStub.errorMessage)
  })

  test('Should show valid email state if validation succeeds', () => {
    const { sut, validationStub } = makeSut()
    validationStub.errorMessage = null
    const emailInput = sut.getByPlaceholderText('Email')
    fireEvent.input(emailInput, { target: { value: faker.internet.email() } })
    const emailStatus = sut.getByPlaceholderText('Email')
    expect(emailStatus.title).toBe('Tudo certo!')
  })

  test('Should show valid password state if validation succeeds', () => {
    const { sut, validationStub } = makeSut()
    validationStub.errorMessage = null
    const passwordInput = sut.getByPlaceholderText('Senha')
    fireEvent.input(passwordInput, { target: { value: faker.internet.password() } })
    const passwordStatus = sut.getByPlaceholderText('Senha')
    expect(passwordStatus.title).toBe('Tudo certo!')
  })
})
