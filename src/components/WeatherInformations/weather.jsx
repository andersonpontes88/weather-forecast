import { Description, Details, Temperature, WeatherContainer, WeatherInfo } from './stylesWeather'

function WeatherInformations({ weather }) {
	return (
		<WeatherContainer>
			<h2>{weather.name}</h2>

			<WeatherInfo>
				<img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt='ícone' />
				<Temperature>{Math.round(weather.main.temp)}°C</Temperature>
			</WeatherInfo>

			<Description>{weather.weather[0].description}</Description>

			<Details>
				<p>Sensação Térmica: {Math.round(weather.main.feels_like)}°C</p>
				<p>Umidade: {weather.main.humidity}</p>
				<p>Pressão: {weather.main.pressure}</p>
			</Details>
		</WeatherContainer>
	)
}

export default WeatherInformations
