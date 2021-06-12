import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { makeLogin, makeSignUp } from '../factories/page'
import apiContext from '@/presentation/contexts/api/api-context'
import { setCurrentAccountAdapter } from '../adapters/current-account/current-account-adapter'

const Router: React.FC = () => (

  <apiContext.Provider value={{
    setCurrentAccount: setCurrentAccountAdapter
  }}>
    <BrowserRouter>
      <Switch>
        <Route path='/login' exact component={makeLogin}/>
        <Route path='/signup' exact component={makeSignUp}/>
      </Switch>
    </BrowserRouter>
  </apiContext.Provider>
)

export default Router
