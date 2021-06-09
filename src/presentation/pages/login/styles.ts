import Styled from 'styled-components'

export const Container = Styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 700px;

  display: flex;
  flex-direction: column;
`

export const Header = Styled.header`
  position: relative;
  width: 100%;
  height: 22rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  color: #FFF;
  padding: 1.6rem 0;  

  background: #41C88E;

  h1 {
    font-weight: bold;
    font-size: 2.5rem;
    margin-top: 4.2rem
  }

  strong {
    font-weight: bold;
    color: #FFB125;
  }

  img {
    position: absolute;
    bottom: 0;
    width: 12rem;
  }
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

    div {
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
