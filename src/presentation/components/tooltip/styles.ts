import Styled from 'styled-components'

export const Container = Styled.div`
  position: relative;

  span {
    width: 160px;
    background: #ff9000;
    padding: 0.8rem;
    border-radius: 0.4rem;
    font-size: 1.5rem;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.4s;

    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);

    color: #444444;

    &::before {
      content: '';
      border-style: solid;
      border-color: #ff9000 transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`
