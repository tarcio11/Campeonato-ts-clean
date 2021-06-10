import React, { useContext } from 'react'
import { Spinner } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-contexts'

import { Container, Error } from './styles'

const FormStatus: React.FC = () => {
  const { isLoading, errorMessage } = useContext(Context)

  return (
    <Container data-testid="error-wrap">
      { isLoading && <Spinner /> }
      { errorMessage && <Error data-testid="main-error">{errorMessage}</Error> }
    </Container>
  )
}

export default FormStatus
