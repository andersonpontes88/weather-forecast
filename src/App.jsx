import axios from 'axios'
import { useRef, useState } from 'react'
import { Background, Button, Container, ContainerMain, Input, Title } from './Styles/globalStyles'
import videoBG from './assets/video-BG1.mp4'
import WeatherInformations from './components/WeatherInformations/weather'
import WeatherInformations5Days from './components/WeatherInformations5Days/weather5Days'

function App() {
	const [weather, setWeather] = useState()
	const [weather5Days, setWeather5Days] = useState()

	const inputValue = useRef()

	//Função para pesquisar a previsão do tempo em uma API (OpenWeather)
	async function searchCity() {
		const city = inputValue.current.value
		const key = '6ad755b65a0edb54c4f0b46a7dcafc9b'

		const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
		const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`

		const weatherInfo = await axios.get(url)
		const weather5Days = await axios.get(url5Days)

		setWeather(weatherInfo.data)
		setWeather5Days(weather5Days.data)
	}

	return (
		<Container>
			<Background autoPlay loop muted>
				<source src={videoBG} type='video/mp4' />
			</Background>

			<ContainerMain>
				<Title>Previsão do tempo</Title>
				<Input ref={inputValue} type='text' placeholder='Digite o nome da cidade' name='search' />
				<Button onClick={searchCity} type='button'>
					Pesquisar
				</Button>
			</ContainerMain>

			{weather && <WeatherInformations weather={weather} />}
			{weather5Days && <WeatherInformations5Days weather5Days={weather5Days} />}
		</Container>
	)
}

export default App
