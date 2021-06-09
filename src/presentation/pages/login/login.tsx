import React from 'react'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'

import { Container, Content, Header } from './styles'

import { logoImg } from '@/presentation/assets/logo'

const Login: React.FC = () => (
  <Container>
    <Content>
      <Header>
        <h1>Campeonato <strong>Play</strong></h1>
        <img src={logoImg} alt="Campeonato Play" />
      </Header>
      <form>
        <h3>Faça seu login</h3>
        <div>
          <FiMail size={20} />
          <input name="email" placeholder="email"/>
        </div>
        <div>
          <FiLock size={20} />
          <input name="password" type="password" placeholder="Senha"/>
        </div>
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
