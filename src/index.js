#!/usr/bin/env node
const { getWeather } = require('./weather');

const args = process.argv.slice(2);
const city = args[0];

if (!city) {
    console.log("Usage: node src/index.js <city>");
    process.exit(1);
}

getWeather(city)
    .then(weather => {
        console.log(`\n📍 Weather for ${weather.name}`);
        console.log(`🌡 Temperature: ${weather.temp}°C`);
        console.log(`☁️  Description: ${weather.desc}`);
        console.log(`💧 Humidity: ${weather.humidity}%`);
        console.log(`💨 Wind: ${weather.wind} m/s\n`);
    })
    .catch(err => {
        console.error("❌ " + err.message);
    });
