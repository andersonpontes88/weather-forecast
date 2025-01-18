import { ForecastDay, WeatherContainer5Days, WeatherItem, WeatherList } from './StylesWeather5Days'

function WeatherInformations5Days({ weather5Days }) {
	// biome-ignore lint/style/useConst: <explanation>
	let dailyForecast = {}

	// biome-ignore lint/style/useConst: <explanation>
	for (let forecast of weather5Days.list) {
		const date = new Date(forecast.dt * 1000).toLocaleDateString()

		if (!dailyForecast[date]) {
			dailyForecast[date] = forecast
		}
	}

	const next5Days = Object.values(dailyForecast).slice(1, 6)

	//função para converter data e adicionar os dias seguintes da semana
	function convertDate(date) {
		const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-BR', {
			weekday: 'long',
			day: '2-digit',
		})

		return newDate
	}

	console.log(next5Days)
	return (
		<WeatherContainer5Days>
			<h3>Previsão para os próximos 5 dias</h3>

			<WeatherList>
				{next5Days.map((forecast) => (
					<WeatherItem key={forecast.dt}>
						<ForecastDay>{convertDate(forecast)}</ForecastDay>
						<img
							src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
							alt='imagem-previsão'
						/>

						<p>{forecast.weather[0].description}</p>
						<p>
							{Math.round(forecast.main.temp_min)}°C min / {Math.round(forecast.main.temp_max)}°C
							máx
						</p>
					</WeatherItem>
				))}
			</WeatherList>
		</WeatherContainer5Days>
	)
}

export default WeatherInformations5Days
