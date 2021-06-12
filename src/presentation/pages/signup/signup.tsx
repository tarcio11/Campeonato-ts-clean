import React, { useState, useEffect } from 'react'
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi'

import Context from '@/presentation/contexts/form/form-contexts'
import { Button, FormStatus, Input, LoginHeader } from '@/presentation/components'

import { Container, Content, AnimationContainer } from './styles'
import { Validation } from '@/presentation/protocols'

type Props = {
  validation: Validation
}

const SignUp: React.FC<Props> = ({ validation }) => {
  const [state, setState] = useState({
    isLoading: false,
    name: '',
    nameError: ''
  })

  useEffect(() => {
    setState({
      ...state,
      nameError: validation.validate('name', { name: state.name })
    })
  }, [state.name])

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <LoginHeader />
          <Context.Provider value={{ state, setState }}>
            <form>
              <h3>Faça seu Cadastro</h3>
              <Input icon={FiUser} name="name" placeholder="Nome" />
              <Input icon={FiMail} name="email" placeholder="Email" />
              <Input icon={FiLock} type="password" name="password" placeholder="Senha" />
              <Button data-testid="submit" disabled type="submit">Cadastrar</Button>
              <FormStatus />
            </form>
          </Context.Provider>
          <span>
            <FiArrowLeft />
            Voltar para login
        </span>
      </AnimationContainer>
      </Content>
    </Container>
  )
}

export default SignUp
