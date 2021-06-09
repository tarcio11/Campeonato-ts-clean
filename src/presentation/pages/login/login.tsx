import React from 'react'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'

import { Input, LoginHeader } from '@/presentation/components'

import { Container, Content } from './styles'

const Login: React.FC = () => (
  <Container>
    <Content>
      <LoginHeader />
      <form>
        <h3>Faça seu login</h3>
        <Input icon={FiMail} name="email" placeholder="Email" />
        <Input icon={FiLock} name="password" placeholder="Senha" />
        <button type='submit'>Entrar</button>
        <a href="#">Esqueci minha senha</a>
      </form>

      <a href="/signup">
        <FiLogIn />
          Criar conta
      </a>
    </Content>
  </Container>
)

export default Login
