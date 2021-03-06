import React from 'react'
import { Container, Ball, Shadow, Gravity } from './styles'

const Spinner: React.FC = () => {
  return (
    <Container>
        <Shadow></Shadow>
        <Gravity>
            <Ball></Ball>
        </Gravity>
    </Container>
  )
}

export default Spinner
