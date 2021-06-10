import React, { useState } from 'react'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import Context from '@/presentation/contexts/form/form-contexts'
import { Button, FormStatus, Input, LoginHeader } from '@/presentation/components'

import { Container, Content } from './styles'

const Login: React.FC = () => {
  const [state] = useState({
    isLoading: false,
    errorMessage: ''
  })

  return (
    <Container>
      <Content>
        <LoginHeader />
        <Context.Provider value={ state }>
          <form>
            <h3>Faça seu login</h3>
            <Input icon={FiMail} name="email" placeholder="Email" />
            <Input icon={FiLock} name="password" placeholder="Senha" />
            <Button type="submit">Entrar</Button>
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
