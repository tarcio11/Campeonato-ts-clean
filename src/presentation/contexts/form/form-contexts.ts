import { createContext } from 'react'

type StateProps = {
  isLoading: boolean
  errorMessage: string
}

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default createContext({} as StateProps)
