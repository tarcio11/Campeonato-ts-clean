import React, { useState, useEffect } from 'react'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import Context from '@/presentation/contexts/form/form-contexts'
import { Button, FormStatus, Input, LoginHeader } from '@/presentation/components'
import { Validation } from '@/presentation/protocols'

import { Container, Content } from './styles'
import { Authentication } from '@/domain/usecases'

type Props = {
  validation: Validation
  authentication: Authentication
}

const Login: React.FC<Props> = ({ validation, authentication }) => {
  const [state, setState] = useState({
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    isLoading: false,
    errorMessage: '',
    mainError: ''
  })

  useEffect(() => {
    setState({
      ...state,
      emailError: validation.validate('email', state.email),
      passwordError: validation.validate('password', state.password)
    })
  }, [state.email, state.password])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    try {
      if (state.isLoading || state.emailError || state.passwordError) {
        return
      }
      setState({ ...state, isLoading: true })
      await authentication.auth({
        email: state.email,
        password: state.password
      })
    } catch (error) {
      setState({
        ...state,
        isLoading: false,
        mainError: error.message
      })
    }
  }

  return (
    <Container>
      <Content>
        <LoginHeader />
        <Context.Provider value={{ state, setState }}>
          <form data-testid="form" onSubmit={handleSubmit}>
            <h3>Faça seu login</h3>
            <Input icon={FiMail} name="email" placeholder="Email" />
            <Input icon={FiLock} name="password" placeholder="Senha" />
            <Button type="submit" data-testid="submit" disabled={!!state.emailError || !!state.passwordError}>Entrar</Button>
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
