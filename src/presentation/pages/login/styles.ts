import Styled from 'styled-components'

export const Container = Styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 700px;

  display: flex;
  flex-direction: column;
`

export const Content = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;

  form {
    width: 34rem;
    text-align: center;
    margin: 4rem auto;
    
    h3 {
      margin-bottom: 2.5rem;
      font-size: 2.5rem;
      font-weight: bold;
      color: #444444;
    }

    a {
      color: #444444;
      display: block;
      margin-top: 2.4rem;
      text-decoration: none;
      transition: color 0.2s;
      opacity: 0.8;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  > a {
    color: #ff9000;
    display: block;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      opacity: 0.8;
    }
  }
`
