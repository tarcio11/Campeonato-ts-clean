import React from 'react'
import 'jest-localstorage-mock'
import { fireEvent, render, RenderResult, waitFor } from '@testing-library/react'
import { SignUp } from '@/presentation/pages'
import { ValidationStub, Helper, AddAccountSpy } from '@/presentation/test'
import faker from 'faker'

type SutTypes = {
  sut: RenderResult
  addAccountSpy: AddAccountSpy
}

type SutParams = {
  validationError: string
}

const makeSut = (params?: SutParams): SutTypes => {
  const validationStub = new ValidationStub()
  const addAccountSpy = new AddAccountSpy()
  validationStub.errorMessage = params?.validationError
  const sut = render(
      <SignUp validation={validationStub} addAccount={addAccountSpy} />
  )
  return {
    sut,
    addAccountSpy
  }
}

const simulateValidSubmit = async (sut: RenderResult, name = faker.name.findName(), email = faker.internet.email(), password = faker.internet.password()): Promise<void> => {
  Helper.populateField(sut, 'Nome', name)
  Helper.populateField(sut, 'Email', email)
  Helper.populateField(sut, 'Senha', password)
  const form = sut.getByTestId('form')
  fireEvent.submit(form)
  await waitFor(() => form)
}

describe('Login Component', () => {
  beforeAll(() => {
    localStorage.clear()
  })

  test('Should start with initial state', () => {
    const validationError = faker.random.words()
    const { sut } = makeSut({ validationError })
    const spinner = sut.getByTestId('spinner')
    expect(spinner.childElementCount).toBe(0)
    const submitButton = sut.getByTestId('submit') as HTMLButtonElement
    expect(submitButton.disabled).toBeTruthy()
  })

  test('Should show name error if Validation fails', () => {
    const validationError = faker.random.words()
    const { sut } = makeSut({ validationError })
    Helper.populateField(sut, 'Nome')
    Helper.testStatusForField(sut, 'Nome', validationError)
  })

  test('Should show email error if Validation fails', () => {
    const validationError = faker.random.words()
    const { sut } = makeSut({ validationError })
    Helper.populateField(sut, 'Email')
    Helper.testStatusForField(sut, 'Email', validationError)
  })

  test('Should show password error if Validation fails', () => {
    const validationError = faker.random.words()
    const { sut } = makeSut({ validationError })
    Helper.populateField(sut, 'Senha')
    Helper.testStatusForField(sut, 'Senha', validationError)
  })

  test('Should show valid name state if validation succeeds', () => {
    const { sut } = makeSut()
    Helper.populateField(sut, 'Nome')
    Helper.testStatusForField(sut, 'Nome', 'Tudo certo!')
  })

  test('Should show valid email state if validation succeeds', () => {
    const { sut } = makeSut()
    Helper.populateField(sut, 'Email')
    Helper.testStatusForField(sut, 'Email', 'Tudo certo!')
  })

  test('Should show valid password state if validation succeeds', () => {
    const { sut } = makeSut()
    Helper.populateField(sut, 'Senha')
    Helper.testStatusForField(sut, 'Senha', 'Tudo certo!')
  })

  test('Should enable submit button if form valid', () => {
    const { sut } = makeSut()
    Helper.populateField(sut, 'Nome')
    Helper.populateField(sut, 'Email')
    Helper.populateField(sut, 'Senha')
    const submitButton = sut.getByTestId('submit') as HTMLButtonElement
    expect(submitButton.disabled).toBeFalsy()
  })

  test('Should show spinner on submit', async () => {
    const { sut } = makeSut()
    await simulateValidSubmit(sut)
    const spinner = sut.getByTestId('spinner')
    expect(spinner).toBeTruthy()
  })

  test('Should call AddAccount with correct values', async () => {
    const { sut, addAccountSpy } = makeSut()
    const name = faker.name.findName()
    const email = faker.internet.email()
    const password = faker.internet.password()
    await simulateValidSubmit(sut, name, email, password)
    expect(addAccountSpy.params).toEqual({
      name,
      email,
      password
    })
  })
})
