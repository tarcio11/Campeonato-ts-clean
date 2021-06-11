import React, { useContext } from 'react'
import { Spinner } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-contexts'

import { Container } from './styles'

const FormStatus: React.FC = () => {
  const { state } = useContext(Context)

  return (
    <Container data-testid="spinner">
      { state.isLoading && <Spinner /> }
    </Container>
  )
}

export default FormStatus
