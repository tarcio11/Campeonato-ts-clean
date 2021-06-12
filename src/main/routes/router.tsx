import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { makeLogin, makeSignUp } from '../factories/page'

const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/login' exact component={makeLogin}/>
      <Route path='/signup' exact component={makeSignUp}/>
    </Switch>
  </BrowserRouter>
)

export default Router
