import React from 'react'
import 'jest-localstorage-mock'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { AddAccount } from '@/domain/usecases'
import { fireEvent, render, RenderResult, waitFor } from '@testing-library/react'
import { SignUp } from '@/presentation/pages'
import { ValidationStub, Helper, AddAccountSpy } from '@/presentation/test'
import { EmailInUseError } from '@/domain/errors'
import ApiContext from '@/presentation/contexts/api/api-context'
import faker from 'faker'

type SutTypes = {
  sut: RenderResult
  addAccountSpy: AddAccountSpy
  setCurrentAccountMock: (account: AddAccount.Response) => void
}

type SutParams = {
  validationError: string
}

const history = createMemoryHistory({ initialEntries: ['/signup'] })
const makeSut = (params?: SutParams): SutTypes => {
  const validationStub = new ValidationStub()
  const addAccountSpy = new AddAccountSpy()
  validationStub.errorMessage = params?.validationError
  const setCurrentAccountMock = jest.fn()
  const sut = render(
    <ApiContext.Provider value={{ setCurrentAccount: setCurrentAccountMock }}>
      <Router history={history}>
        <SignUp validation={validationStub} addAccount={addAccountSpy} />
      </Router>
    </ApiContext.Provider>
  )
  return {
    sut,
    addAccountSpy,
    setCurrentAccountMock
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

  test('Should call AddAccount only once', async () => {
    const { sut, addAccountSpy } = makeSut()
    await simulateValidSubmit(sut)
    await simulateValidSubmit(sut)
    expect(addAccountSpy.callsCount).toBe(1)
  })

  test('Should not call AddAccount if form is invalid', () => {
    const validationError = faker.random.words()
    const { sut, addAccountSpy } = makeSut({ validationError })
    Helper.populateField(sut, 'Email')
    fireEvent.submit(sut.getByTestId('submit'))
    expect(addAccountSpy.callsCount).toBe(0)
  })

  test('Should present error if AddAccount fails', async () => {
    const { sut, addAccountSpy } = makeSut()
    const error = new EmailInUseError()
    jest.spyOn(addAccountSpy, 'add').mockReturnValueOnce(Promise.reject(error))
    await simulateValidSubmit(sut)
    await waitFor(() => (sut.getByTestId('form')))
    const spinner = sut.getByTestId('spinner')
    expect(spinner.childElementCount).toBe(0)
  })

  test('Should call UpdateSetCurrentAccount on success', async () => {
    const { sut, addAccountSpy, setCurrentAccountMock } = makeSut()
    await simulateValidSubmit(sut)
    await waitFor(() => (sut.getByTestId('form')))
    expect(setCurrentAccountMock).toHaveBeenCalledWith(addAccountSpy.response)
    expect(history.length).toBe(1)
    expect(history.location.pathname).toBe('/')
  })

  test('Should go to login page', async () => {
    const { sut } = makeSut()
    const loginLink = sut.getByTestId('login-link')
    fireEvent.click(loginLink)
    expect(history.length).toBe(1)
    expect(history.location.pathname).toBe('/login')
  })
})
