import { createGlobalStyle, styled } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    font-family: "Prompt", sans-serif;
    line-height: 1.6;
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Background = styled.video`
  position: fixed;
  filter: grayscale(30%);
  top: 0;
  left: 0;
  object-fit: cover;
  width: 100%;
  height: 100vh;
`
export const ContainerMain = styled.div`
  text-align: center;
  position: relative;
  top: 20px;
  margin: 10px;
`

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
  color: #fff;
`
export const Input = styled.input`
  padding: 10px 10px 10px 15px;
  border-radius: 20px 0 0 20px;
  border: none;
  width: 60%;
  max-width: 300px;
  outline: none;
  margin-top: 20px;
`
export const Button = styled.button`
  background-color: #84cc16;
  border: 0;
  padding: 10px;
  border-radius: 0 20px 20px 0;
  cursor: pointer;
  color: #fff;
  font-weight: 500;
  width: 50%;
  max-width: 80px;

  &:hover {
    opacity: 0.7;
    color: #a855f7;
  }
`
