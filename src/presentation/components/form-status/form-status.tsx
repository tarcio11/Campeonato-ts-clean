import React, { useContext } from 'react'
import { Spinner } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-contexts'

import { Container } from './styles'

const FormStatus: React.FC = () => {
  const { isLoading } = useContext(Context)

  return (
    <Container data-testid="spinner">
      { isLoading && <Spinner /> }
    </Container>
  )
}

export default FormStatus
