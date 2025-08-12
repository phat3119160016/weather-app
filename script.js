// Weather API configuration
const API_KEY = "YOUR_API_KEY_HERE"; // Replace with your OpenWeatherMap API key
const API_URL = "https://api.openweathermap.org/data/2.5";

// DOM elements
const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const currentWeather = document.getElementById("currentWeather");
const errorMessage = document.getElementById("errorMessage");

// Weather data elements
const cityName = document.getElementById("cityName");
const currentDate = document.getElementById("currentDate");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const weatherIcon = document
  .getElementById("weatherIcon")
  .querySelector(".icon");
const feelsLike = document.getElementById("feelsLike");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const pressure = document.getElementById("pressure");
const forecastList = document.getElementById("forecastList");

// Weather icon mapping
const weatherIcons = {
  "clear sky": "☀️",
  "few clouds": "🌤️",
  "scattered clouds": "⛅",
  "broken clouds": "☁️",
  "shower rain": "🌦️",
  rain: "🌧️",
  thunderstorm: "⛈️",
  snow: "❄️",
  mist: "🌫️",
  smoke: "🌫️",
  haze: "🌫️",
  dust: "🌫️",
  fog: "🌫️",
  sand: "🌫️",
  ash: "🌫️",
  squall: "💨",
  tornado: "🌪️",
};

// Initialize the app
document.addEventListener("DOMContentLoaded", function () {
  updateCurrentDate();
  loadDefaultWeather();

  // Event listeners
  searchBtn.addEventListener("click", handleSearch);
  cityInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      handleSearch();
    }
  });
});

// Update current date
function updateCurrentDate() {
  const now = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  currentDate.textContent = now.toLocaleDateString("en-US", options);
}

// Load default weather (user's location or fallback city)
async function loadDefaultWeather() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        fetchWeatherByCoords(lat, lon);
      },
      (error) => {
        console.log("Geolocation error:", error);
        fetchWeatherByCity("New York"); // Fallback city
      }
    );
  } else {
    fetchWeatherByCity("New York"); // Fallback city
  }
}

// Handle search button click
function handleSearch() {
  const city = cityInput.value.trim();
  if (city) {
    fetchWeatherByCity(city);
    cityInput.value = "";
  }
}

// Fetch weather data by city name
async function fetchWeatherByCity(city) {
  try {
    showLoading(true);
    hideError();

    // For demo purposes, we'll use mock data since you need an API key
    // Replace this with actual API calls when you have a key
    const mockWeatherData = getMockWeatherData(city);
    const mockForecastData = getMockForecastData(city);

    displayCurrentWeather(mockWeatherData);
    displayForecast(mockForecastData);

    // Uncomment these lines when you have an API key:
    /*
        const weatherResponse = await fetch(`${API_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const forecastResponse = await fetch(`${API_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`);
        
        if (!weatherResponse.ok || !forecastResponse.ok) {
            throw new Error('City not found');
        }
        
        const weatherData = await weatherResponse.json();
        const forecastData = await forecastResponse.json();
        
        displayCurrentWeather(weatherData);
        displayForecast(forecastData);
        */
  } catch (error) {
    console.error("Error fetching weather data:", error);
    showError();
  } finally {
    showLoading(false);
  }
}

// Fetch weather data by coordinates
async function fetchWeatherByCoords(lat, lon) {
  try {
    showLoading(true);
    hideError();

    // For demo purposes, using mock data
    const mockWeatherData = getMockWeatherData("Your Location");
    const mockForecastData = getMockForecastData("Your Location");

    displayCurrentWeather(mockWeatherData);
    displayForecast(mockForecastData);

    // Uncomment these lines when you have an API key:
    /*
        const weatherResponse = await fetch(`${API_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
        const forecastResponse = await fetch(`${API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
        
        if (!weatherResponse.ok || !forecastResponse.ok) {
            throw new Error('Unable to fetch weather data');
        }
        
        const weatherData = await weatherResponse.json();
        const forecastData = await forecastResponse.json();
        
        displayCurrentWeather(weatherData);
        displayForecast(forecastData);
        */
  } catch (error) {
    console.error("Error fetching weather data:", error);
    showError();
  } finally {
    showLoading(false);
  }
}

// Display current weather data
function displayCurrentWeather(data) {
  cityName.textContent = data.name;
  temperature.textContent = `${Math.round(data.main.temp)}°`;
  description.textContent = data.weather[0].description;
  feelsLike.textContent = `${Math.round(data.main.feels_like)}°`;
  humidity.textContent = `${data.main.humidity}%`;
  windSpeed.textContent = `${Math.round(data.wind.speed * 3.6)} km/h`;
  pressure.textContent = `${data.main.pressure} hPa`;

  // Update weather icon
  const iconKey = data.weather[0].description.toLowerCase();
  weatherIcon.textContent = weatherIcons[iconKey] || "🌤️";
}

// Display forecast data
function displayForecast(data) {
  forecastList.innerHTML = "";

  // Get forecast for next 5 days (every 24 hours from the forecast data)
  const dailyForecasts = [];
  const currentDate = new Date();

  for (let i = 1; i <= 5; i++) {
    const forecastDate = new Date(currentDate);
    forecastDate.setDate(currentDate.getDate() + i);

    // Find forecast data for this date (using mock data structure)
    const dayForecast = data.list[i - 1]; // Simplified for mock data

    dailyForecasts.push({
      date: forecastDate,
      temp: dayForecast.main.temp,
      description: dayForecast.weather[0].description,
      icon: dayForecast.weather[0].description,
    });
  }

  // Create forecast items
  dailyForecasts.forEach((forecast) => {
    const forecastItem = document.createElement("div");
    forecastItem.className = "forecast-item";

    const dayName = forecast.date.toLocaleDateString("en-US", {
      weekday: "short",
    });
    const iconKey = forecast.icon.toLowerCase();

    forecastItem.innerHTML = `
            <div class="forecast-day">${dayName}</div>
            <div class="forecast-icon">${weatherIcons[iconKey] || "🌤️"}</div>
            <div class="forecast-temp">${Math.round(forecast.temp)}°</div>
            <div class="forecast-desc">${forecast.description}</div>
        `;

    forecastList.appendChild(forecastItem);
  });
}

// Show/hide loading state
function showLoading(isLoading) {
  if (isLoading) {
    currentWeather.classList.add("loading");
  } else {
    currentWeather.classList.remove("loading");
  }
}

// Show error message
function showError() {
  errorMessage.style.display = "block";
  setTimeout(() => {
    errorMessage.style.display = "none";
  }, 5000);
}

// Hide error message
function hideError() {
  errorMessage.style.display = "none";
}

// Mock weather data for demo purposes
function getMockWeatherData(cityName) {
  return {
    name: cityName,
    main: {
      temp: Math.floor(Math.random() * 30) + 5, // Random temp between 5-35°C
      feels_like: Math.floor(Math.random() * 30) + 5,
      humidity: Math.floor(Math.random() * 40) + 40, // 40-80%
      pressure: Math.floor(Math.random() * 100) + 1000, // 1000-1100 hPa
    },
    weather: [
      {
        description: getRandomWeatherDescription(),
      },
    ],
    wind: {
      speed: Math.random() * 10 + 2, // 2-12 m/s
    },
  };
}

// Mock forecast data for demo purposes
function getMockForecastData(cityName) {
  const forecasts = [];

  for (let i = 0; i < 5; i++) {
    forecasts.push({
      main: {
        temp: Math.floor(Math.random() * 25) + 10, // 10-35°C
      },
      weather: [
        {
          description: getRandomWeatherDescription(),
        },
      ],
    });
  }

  return {
    list: forecasts,
  };
}

// Get random weather description for demo
function getRandomWeatherDescription() {
  const descriptions = [
    "clear sky",
    "few clouds",
    "scattered clouds",
    "broken clouds",
    "shower rain",
    "rain",
    "thunderstorm",
    "snow",
    "mist",
  ];
  return descriptions[Math.floor(Math.random() * descriptions.length)];
}

// Utility function to format temperature
function formatTemp(temp) {
  return `${Math.round(temp)}°`;
}

// Utility function to format wind speed
function formatWindSpeed(speed) {
  return `${Math.round(speed * 3.6)} km/h`;
}

// Additional feature: Auto-refresh weather data every 10 minutes
setInterval(() => {
  const currentCity = cityName.textContent;
  if (currentCity && currentCity !== "Loading...") {
    if (currentCity === "Your Location") {
      loadDefaultWeather();
    } else {
      fetchWeatherByCity(currentCity);
    }
  }
}, 600000); // 10 minutes

// Add some visual effects on load
window.addEventListener("load", () => {
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.5s ease-in-out";

  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 100);
});
