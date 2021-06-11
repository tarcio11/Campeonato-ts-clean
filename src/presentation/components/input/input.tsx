import React, { InputHTMLAttributes, useState, useCallback, useRef, useContext } from 'react'
import { IconBaseProps } from 'react-icons'
import { FiAlertCircle } from 'react-icons/fi'
import Context from '@/presentation/contexts/form/form-contexts'

import { Container, Error } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  name: string
  icon?: React.ComponentType<IconBaseProps>
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const { state, setState } = useContext(Context)
  const error = state[`${name}Error`]

  const handleChange = (event: React.FocusEvent<HTMLInputElement>): void => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  }

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)

    setIsFilled(!!inputRef.current?.value)
  }, [])

  const getTitle = (): string => {
    if (error) {
      return error
    } else {
      return 'Tudo certo!'
    }
  }

  return (
    <Container isErrored={state.mainError} isFilled={isFilled} isFocused={isFocused} data-testid="input-wrap">
      {Icon && <Icon size={20} />}
      <input
        name={name}
        title={getTitle()}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChange={handleChange}
        ref={inputRef}
        {...rest}
      />

    { state.mainError && <Error data-testid="main-error" title={state.mainError}>
      <FiAlertCircle color="#c53030" size={20} />
    </Error> }
    </Container>
  )
}

export default Input
