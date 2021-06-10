import React, { useState, useEffect } from 'react'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import Context from '@/presentation/contexts/form/form-contexts'
import { Button, FormStatus, Input, LoginHeader } from '@/presentation/components'
import { Validation } from '@/presentation/protocols/validation'

import { Container, Content } from './styles'

type Props = {
  validation: Validation
}

const Login: React.FC<Props> = ({ validation }) => {
  const [state, setState] = useState({
    email: '',
    password: '',
    error: '',
    isLoading: false,
    errorMessage: ''
  })

  useEffect(() => {
    setState({
      ...state,
      error: validation.validate('email', state.email)
    })
  }, [state.email])

  useEffect(() => {
    validation.validate('password', state.password)
  }, [state.password])

  return (
    <Container>
      <Content>
        <LoginHeader />
        <Context.Provider value={{ state, setState }}>
          <form>
            <h3>Faça seu login</h3>
            <Input icon={FiMail} name="email" placeholder="Email" />
            <Input icon={FiLock} name="password" placeholder="Senha" />
            <Button type="submit" data-testid="submit" disabled>Entrar</Button>
            <FormStatus />
            <a href="#">Esqueci minha senha</a>
          </form>
        </Context.Provider>
        <a href="/signup">
          <FiLogIn />
          Criar conta
      </a>
      </Content>
    </Container>
  )
}

export default Login
