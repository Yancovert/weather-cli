const axios = require('axios');
require('dotenv').config();

const API_KEY = process.env.OPENWEATHER_KEY;

async function getWeather(city) {
    if (!API_KEY) throw new Error("Missing API key in .env");

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        const response = await axios.get(url);
        const data = response.data;
        return {
            name: data.name,
            temp: data.main.temp,
            desc: data.weather[0].description,
            humidity: data.main.humidity,
            wind: data.wind.speed,
        };
    } catch (err) {
        throw new Error("Failed to fetch weather: " + err.response?.data?.message || err.message);
    }
}

module.exports = { getWeather };
