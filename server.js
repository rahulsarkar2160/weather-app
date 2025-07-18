const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Setup views and static folder
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
    console.log("✅ GET / route hit");
    res.render("index", { weather: null, error: null });
});

app.post("/weather", async (req, res) => {
    const city = req.body.city;
    const apiKey = process.env.WEATHER_API_KEY;

    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`;
        const response = await axios.get(url);
        const weatherData = response.data;

        const description = weatherData.weather[0].main.toLowerCase();

        let icon = "";
        switch (description) {
            case "clear":
                icon = "☀️";
                break;
            case "clouds":
                icon = "⛅";
                break;
            case "rain":
                icon = "🌧️";
                break;
            case "thunderstorm":
                icon = "🌩️";
                break;
            case "snow":
                icon = "❄️";
                break;
            case "mist":
            case "fog":
            case "haze":
                icon = "🌫️";
                break;
            default:
                icon = "🌡️";
        }

        const weatherText = `It is ${weatherData.main.temp}°C in ${weatherData.name} (${weatherData.weather[0].description}\n${icon})`;


        res.render("index", { weather: weatherText, error: null });
    } catch (error) {
        res.render("index", { weather: null, error: "City not found. Please try again." });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
