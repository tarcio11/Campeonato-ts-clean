import Styled from 'styled-components'

export const Container = Styled.header`
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
