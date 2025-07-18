# 🌦️ Weather App

A simple weather app built using Node.js, Express, and EJS. Enter a city name to get real-time weather information using the OpenWeatherMap API.

🔗 **Live Demo:** [https://weather-app-svii.onrender.com](https://weather-app-svii.onrender.com)
>Note: the app can take a few seconds to wake up.

## 🚀 Features

- Search any city to get current temperature and weather conditions
- Weather displayed with descriptive emojis (☀️, 🌧️, ❄️, etc.)
- Environment variables for API security
- Minimal UI with EJS templates and CSS
- Deployed using Render

## 🛠️ Tech Stack

- Node.js
- Express.js
- EJS (template engine)
- Axios (API requests)
- dotenv (env vars)
- Render (deployment)

## 📁 Folder Structure

```
weather-app/
├── views/
│   └── index.ejs
├── public/
│   └── style.css
├── .env
├── server.js
├── package.json
└── README.md
```

## 🧪 Run Locally

1. **Clone the repo**  
   ```bash
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Set up `.env`**  
   Create a `.env` file in the root folder:
   ```
   WEATHER_API_KEY=your_openweather_api_key
   ```

4. **Start the app**  
   ```bash
   npm start
   ```
   Open your browser and go to: [http://localhost:3000](http://localhost:3000)

## 🌍 Live Demo

🔗 [Deployed on Render](https://weather-app-svii.onrender.com)  
> Note: The free tier may sleep after inactivity — the app can take a few seconds to wake up.

## 🚢 Deploying to Render

1. Push code to GitHub
2. Create a new Web Service on [Render](https://render.com)
3. Connect the GitHub repo
4. Set the environment variable:
   ```
   WEATHER_API_KEY=your_api_key_here
   ```
5. Set Start Command to:
   ```
   node server.js
   ```
6. Choose the **Free** plan and deploy

## ✅ Example Logs

```bash
[dotenv@17.2.0] injecting env from .env
✅ Server running at http://localhost:3000
✅ GET / route hit
```

## 📄 License

## License

This project is licensed under the [MIT License](./LICENSE).
Use it, tweak it, share it!