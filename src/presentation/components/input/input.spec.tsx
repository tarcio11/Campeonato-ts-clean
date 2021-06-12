import React from 'react'
import faker from 'faker'
import { render, screen } from '@testing-library/react'
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
    const inputWrap = screen.getByPlaceholderText('Email')
    expect(inputWrap).toBeTruthy()
  })
})
