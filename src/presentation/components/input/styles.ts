import Styled from 'styled-components'

export const Container = Styled.div`
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
