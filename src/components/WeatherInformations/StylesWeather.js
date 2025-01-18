import styled from "styled-components";


export const WeatherContainer = styled.div`
  background-color: rgba(220, 220, 220, 0.8);
  border-radius: 20px;
  padding: 20px;
  margin: 20px 0;
  position: relative;
  top: 20px;
  width: 50%;
  text-align: center;

  h2 {
    font-size: 2.3rem;
  }
  `
export const WeatherInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 70px;
  }
`
export const Temperature = styled.div`
  font-size: 2.5rem;
  font-weight: 600;
`
export const Description = styled.div`
  text-transform: capitalize;
  font-size: 1.3rem;
  margin-bottom: 10px;
  font-weight: 500;
`
export const Details = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  font-weight: 500;
`