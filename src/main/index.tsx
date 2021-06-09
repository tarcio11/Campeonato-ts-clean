import React from 'react'
import Login from '@/presentation/pages/login/login'
import ReactDom from 'react-dom'

import GlobalStyles from '../presentation/styles/global'

ReactDom.render(
  <>
    <Login />
    <GlobalStyles />
  </>,
  document.getElementById('main')
)
