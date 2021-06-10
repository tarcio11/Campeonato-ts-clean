import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import Context from '@/presentation/contexts/form/form-contexts'
import { Button, FormStatus, Input, LoginHeader } from '@/presentation/components'
import { Validation } from '@/presentation/protocols'
import { Authentication } from '@/domain/usecases'

import { Container, Content } from './styles'

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
      const account = await authentication.auth({
        email: state.email,
        password: state.password
      })
      localStorage.setItem('accessToken', account.accessToken)
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
            <Link to="#">Esqueci minhLink senha</Link>
          </form>
        </Context.Provider>
        <Link data-testid="signup" to="/signup">
          <FiLogIn />
          Criar conta
      </Link>
      </Content>
    </Container>
  )
}

export default Login
