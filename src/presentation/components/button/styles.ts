import Styled from 'styled-components'

export const Container = Styled.div`
  button {
    background: #41C88E;
    height: 56px;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    color: #fff;
    width: 100%;
    font-weight: 500;
    margin-top: 16px;
    transition: background-color 0.2s;

    &:hover {
      opacity: 0.8;
  }
  &:disabled {
    background-color: #CCC;
    
    &:hover: {
      opacity: 1;
      cursor: not-allowed;
    }
  }
}
`
