import React from 'react'
import { Container } from './styles'

type Props = {
  title: string
  className?: string
}

const Tooltip: React.FC<Props> = ({ title, children, className }) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  )
}

export default Tooltip
