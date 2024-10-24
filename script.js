async function getWeather() {
    const city = document.getElementById('city').value;
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=61835427f9af4b4e9fa175204242410&q=${city}`;

    try {
        const response = await fetch(apiUrl);

        const data = await response.json();
        const weatherDetails = document.getElementById('weather-details');
        
        const highTemp = data.current.temp_c;
        const lowTemp = data.current.temp_c - 10;
        const feelsLike = data.current.feelslike_c;
        const humidity = data.current.humidity;
        const windSpeed = data.current.wind_kph;
        const visibility = data.current.vis_km;
        const uvIndex = data.current.uv;
        const condition = data.current.condition.text;
        const conditionIcon = data.current.condition.icon;

        weatherDetails.innerHTML = `
            <div class="weather-box">
                <div class="weather-title">High</div>
                <div class="weather-value">${highTemp}°C</div>
            </div>
            <div class="weather-box">
                <div class="weather-title">Low</div>
                <div class="weather-value">${lowTemp}°C</div>
            </div>
            <div class="weather-box">
                <div class="weather-title">Feels Like</div>
                <div class="weather-value">${feelsLike}°C</div>
            </div>
            <div class="weather-box">
                <div class="weather-title">Humidity</div>
                <div class="weather-value">${humidity}%</div>
            </div>
            <div class="weather-box">
                <div class="weather-title">
                    <img src="https:${conditionIcon}" alt="${condition}" />
                </div>
                <div class="weather-value">${condition}</div>
            </div>
            <div class="weather-box">
                <div class="weather-title">Wind Speed</div>
                <div class="weather-value">${windSpeed} kph</div>
            </div>
            <div class="weather-box">
                <div class="weather-title">Visibility</div>
                <div class="weather-value">${visibility} km</div>
            </div>
            <div class="weather-box">
                <div class="weather-title">Condition</div>
                <div class="weather-value">${condition}</div>
            </div>
            <div class="weather-box">
                <div class="weather-title">UV Index</div>
                <div class="weather-value">${uvIndex}</div>
            </div>
        `;
    } catch (error) {
        alert(error.message);
    }
}
