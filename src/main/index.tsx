import React from 'react'
import ReactDom from 'react-dom'
import Router from '@/main/routes/router'
import GlobalStyles from '../presentation/styles/global'

ReactDom.render(
  <>
    <Router />
    <GlobalStyles />
  </>,
  document.getElementById('main')
)
