import React, { ButtonHTMLAttributes } from 'react'
import { Container, Ball, Shadow, Gravity } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
    <Container>
        <Shadow></Shadow>
        <Gravity>
            <Ball></Ball>
        </Gravity>
    </Container>
)

export default Button
