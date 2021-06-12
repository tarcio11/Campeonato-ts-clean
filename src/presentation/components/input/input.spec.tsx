import React from 'react'
import faker from 'faker'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Input } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-contexts'

const makeSut = (fieldName: string): void => {
  render(
    <Context.Provider value={{ state: {} }}>
      <Input name={fieldName} placeholder="Email" />
    </Context.Provider>
  )
}

describe('Input component', () => {
  test('should be able to render an input', () => {
    const field = faker.database.column()
    makeSut(field)
    const inputElement = screen.getByPlaceholderText('Email')
    expect(inputElement).toBeTruthy()
  })

  test('should render highlight on input focus and blur', async () => {
    const field = faker.database.column()
    makeSut(field)

    const inputElement = screen.getByPlaceholderText('Email')
    const inputWrap = screen.getByTestId('input-wrap')

    fireEvent.focus(inputElement)

    await waitFor(() => inputWrap)
    expect(inputWrap).toHaveStyle('border-color: #41C88E')
    expect(inputWrap).toHaveStyle('color: #41C88E')

    fireEvent.blur(inputElement)

    await waitFor(() => inputWrap)
    expect(inputWrap).not.toHaveStyle('border-color: #41C88E')
    expect(inputWrap).not.toHaveStyle('color: #41C88E')
  })
})
