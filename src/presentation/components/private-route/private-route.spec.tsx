import React from 'react'
import { render } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { mockAccountModel } from '@/domain/test'
import { createMemoryHistory, MemoryHistory } from 'history'
import PrivateRoute from './private-route'
import ApiContext from '@/presentation/contexts/api/api-context'

type SutTypes = {
  history: MemoryHistory
}

const makeSut = (account = mockAccountModel()): SutTypes => {
  const history = createMemoryHistory({ initialEntries: ['/'] })
  render(
    <ApiContext.Provider value={{ getCurrentAccount: () => account }}>
      <Router history={history}>
        <PrivateRoute />
      </Router>
    </ApiContext.Provider>
  )
  return { history }
}

describe('PrivateRoute', () => {
  test('Should to redirect to /login if token is empty', () => {
    const { history } = makeSut(null)
    expect(history.location.pathname).toBe('/login')
  })
})
