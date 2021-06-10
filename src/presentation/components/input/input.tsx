import React, { InputHTMLAttributes, useState, useCallback, useRef, useContext } from 'react'
import { IconBaseProps } from 'react-icons'
import { Container } from './styles'
import Context from '@/presentation/contexts/form/form-contexts'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  name: string
  icon?: React.ComponentType<IconBaseProps>
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const { state, setState } = useContext(Context)

  const handleChange = useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  }, [])

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)

    setIsFilled(!!inputRef.current?.value)
  }, [])

  return (
    <Container isFilled={isFilled} isFocused={isFocused}>
      {Icon && <Icon size={20} />}
      <input
        name={name}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChange={handleChange}
        ref={inputRef}
        {...rest}
      />
    </Container>
  )
}

export default Input
