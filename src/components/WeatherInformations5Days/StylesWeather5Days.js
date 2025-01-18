import styled from "styled-components";


export const WeatherContainer5Days = styled.div`
  background-color: rgba(220, 220, 220, 0.8);
  border-radius: 20px;
  padding: 20px;
  margin-top: 20px;
  position: relative;
  bottom: 10px;
  width: 50%;
  text-align: center;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 25px;
  }
  `
export const WeatherList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
`

export const WeatherItem = styled.div`
  background-color: rgba(	255,250,250, 0.6);
  text-align: center;
  border-radius: 10px;
  padding: 10px;
  font-weight: 500;

  img {
    width: 70px;
  }
`

export const ForecastDay = styled.p`
  text-transform: capitalize;
  font-size: 1.1rem;
  font-weight: 600;
`

export const ForecastDescription = styled.p`
  text-transform: capitalize;
  font-weight: 500;
`
