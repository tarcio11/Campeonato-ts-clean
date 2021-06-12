import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SignUp from '../pages/signup/signup'

type Props = {
  makeLogin: React.FC
}

const Router: React.FC<Props> = ({ makeLogin }) => (
  <BrowserRouter>
    <Switch>
      <Route path='/login' exact component={makeLogin}/>
      <Route path='/signup' exact component={SignUp}/>
    </Switch>
  </BrowserRouter>
)

export default Router
