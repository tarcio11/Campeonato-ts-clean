import React from 'react'
import { render } from '@testing-library/react'
import { Input } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-contexts'

describe('Input component', () => {
  test('should be able to render an input', () => {
    const { getByPlaceholderText } = render(
      <Context.Provider value={{ state: {} }}>
        <Input name='any_field' placeholder="Email" />
      </Context.Provider>
    )
    expect(getByPlaceholderText('Email')).toBeTruthy()
  })
})
