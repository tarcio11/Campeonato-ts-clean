import React from 'react'
import ReactDom from 'react-dom'
import Router from '@/presentation/router/router'
import GlobalStyles from '../presentation/styles/global'
import { makeLogin, makeSignUp } from './factories/page'

ReactDom.render(
  <>
    <Router
      makeLogin={makeLogin}
      makeSignUp={makeSignUp}
    />
    <GlobalStyles />
  </>,
  document.getElementById('main')
)
