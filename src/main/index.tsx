import React from 'react'
import ReactDom from 'react-dom'
import Router from '@/presentation/router/router'
import GlobalStyles from '../presentation/styles/global'
import { makeLogin } from './factories/page'

ReactDom.render(
  <>
    <Router
      makeLogin={makeLogin}
    />
    <GlobalStyles />
  </>,
  document.getElementById('main')
)
