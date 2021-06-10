import Styled, { keyframes } from 'styled-components'

export const Container = Styled.div`
  margin: 0 auto;
  width: 40px;
  height: 140px;
  // border: solid 1px black;
  position: relative;
`

const shadowScale = keyframes`
  0% {}
  50% { transform: scaleX(1); opacity: .8;}
  100% {}
`

export const Shadow = Styled.div`
    position: absolute;
    width: 100%;
    height: 10px;
    background-color: grey;
    bottom: 0;
    border-radius: 100%;
    transform: scaleX(.8);
    opacity: .6;
    animation: ${shadowScale} 1s linear infinite;
`

const bounce = keyframes`
  0% {}
  50% { transform: translateY(100px) }
  100% {}
`

export const Gravity = Styled.div`
  width: 40px;
  height: 40px;
  animation: ${bounce} 1s cubic-bezier(0.68, 0.35, 0.29, 0.54) infinite;
`
const roll = keyframes`
  0% {}
  100% { transform: rotate(360deg) }
`

export const Ball = Styled.div`
  width: 40px;
  height: 40px;
  background-image: url('https://image.flaticon.com/icons/svg/33/33736.svg');
  background-size: cover;
  animation: ${roll} .6s linear infinite;
`
