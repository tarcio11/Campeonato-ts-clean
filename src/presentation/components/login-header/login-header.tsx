import React, { memo } from 'react'

import { Logo } from '@/presentation/components'

import { Container } from './styles'

const LoginHeader: React.FC = () => (
    <Container>
        <h1>Campeonato <strong>Play</strong></h1>
        <Logo />
    </Container>
)

export default memo(LoginHeader)
