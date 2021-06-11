import Styled, { css } from 'styled-components'

import Tooltip from '@/presentation/components/tooltip/tooltip'

type ContainerProps = {
  isFocused: boolean
  isFilled: boolean
  isErrored: boolean
}

export const Container = Styled.div<ContainerProps>`
  background: #EEEEF2;
  border-radius: 10px;
  border: 2px solid #EEEEF2;
  padding: 16px;
  width: 100%;
  color: #A4A4B2;

  display: flex;
  align-items: center;
  & + div {
    margin-top: 8px;
  }
  
  svg {
    margin-right: 16px;
  }

  ${props => props.isErrored && css`
    border-color: #c53030;
  `}
  
  ${props => props.isFocused && css`
    color: #41C88E;
    border-color: #41C88E;
  `}

  ${props => props.isFilled && css`
    color: #41C88E;
  `}

  input {
    flex: 1;
    background: transparent;
    border: 0;

    &::placeholder {
      color: #A4A4B2;
    }
  }
    svg {
      margin-right: 16px;
    }
  }
`

export const Error = Styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`
