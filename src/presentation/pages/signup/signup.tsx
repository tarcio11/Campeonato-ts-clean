import React, { useState, useEffect } from 'react'
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'
import Context from '@/presentation/contexts/form/form-contexts'
import { Button, FormStatus, Input, LoginHeader } from '@/presentation/components'

import { Container, Content, AnimationContainer } from './styles'
import { Validation } from '@/presentation/protocols'
import { AddAccountSpy } from '@/presentation/test'

type Props = {
  validation: Validation
  addAccount: AddAccountSpy
}

const SignUp: React.FC<Props> = ({ validation, addAccount }) => {
  const history = useHistory()
  const [state, setState] = useState({
    isLoading: false,
    name: '',
    nameError: '',
    email: '',
    emailError: '',
    password: '',
    passwordError: '',
    mainError: ''
  })

  useEffect(() => {
    setState({
      ...state,
      nameError: validation.validate('name', { name: state.name }),
      emailError: validation.validate('email', { email: state.email }),
      passwordError: validation.validate('password', { password: state.password })
    })
  }, [state.name, state.email, state.password])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    try {
      if (state.isLoading || state.nameError || state.emailError || state.passwordError) {
        return
      }
      setState({ ...state, isLoading: true })
      const account = await addAccount.add({
        name: state.name,
        email: state.email,
        password: state.password
      })
      localStorage.setItem('accessToken', account.accessToken)
      history.replace('/')
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
        <AnimationContainer>
          <LoginHeader />
          <Context.Provider value={{ state, setState }}>
            <form data-testid="form" onSubmit={handleSubmit}>
              <h3>Faça seu Cadastro</h3>
              <Input icon={FiUser} name="name" placeholder="Nome" />
              <Input icon={FiMail} name="email" placeholder="Email" />
              <Input icon={FiLock} type="password" name="password" placeholder="Senha" />
              <Button data-testid="submit" type="submit" disabled={!!state.nameError || !!state.emailError || !!state.passwordError}>Cadastrar</Button>
              <FormStatus />
            </form>
          </Context.Provider>
          <Link data-testid="login-link" replace to="/login">
            <FiArrowLeft />
            Voltar para login
        </Link>
      </AnimationContainer>
      </Content>
    </Container>
  )
}

export default SignUp
