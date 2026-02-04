<div align="center">
<img src="Images/banner.png" alt="Weather App Banner" width="100%" height="200" style="object-fit: cover" />

# 🌤️ Live Weather App

### Real-time Weather Forecasting Application

[![Netlify Status](https://img.shields.io/badge/Netlify-Deployed-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://app.netlify.com/projects/weather-forcasting-temperature/deploys)
[![React](https://img.shields.io/badge/React-16.13.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![License](https://img.shields.io/badge/License-MIT-2EA44F?style=for-the-badge&logo=open-source-initiative&logoColor=white)](LICENSE)
</div>

---

## 🎯 About

<p align="justify">A beautiful, responsive weather application built with React that provides real-time weather information for any location worldwide. Get instant access to current weather conditions, temperature, humidity, wind speed, and more!</p>

---

## 🚀 View Live Site

The project has been fully deployed and is accessible online.

[![Live Demo](https://img.shields.io/badge/LIVE-VISIT_SITE-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://weather-forcasting-temperature.netlify.app/)

---

## ✨ Features

<table>
  <tr>
    <td>🌍</td>
    <td><b>Geolocation Support</b><br/>Automatically detects your location for instant weather updates</td>
  </tr>
  <tr>
    <td>🔍</td>
    <td><b>City Search</b><br/>Search weather for any city worldwide</td>
  </tr>
  <tr>
    <td>🌡️</td>
    <td><b>Real-time Data</b><br/>Live temperature, humidity, and weather conditions</td>
  </tr>
  <tr>
    <td>🎨</td>
    <td><b>Animated Icons</b><br/>Beautiful weather animations that match conditions</td>
  </tr>
  <tr>
    <td>⏰</td>
    <td><b>Live Clock</b><br/>Real-time clock with current date display</td>
  </tr>
  <tr>
    <td>📱</td>
    <td><b>Responsive Design</b><br/>Optimized mobile layout with stackable elements and auto-adjusting containers</td>
  </tr>
  <tr>
    <td>✨</td>
    <td><b>Custom Favicon</b><br/>Unique transparent SVG weather icon for clear visibility on all themes</td>
  </tr>
  <tr>
    <td>💨</td>
    <td><b>Wind Speed</b><br/>Current wind speed information</td>
  </tr>
  <tr>
    <td>👁️</td>
    <td><b>Visibility</b><br/>Atmospheric visibility data</td>
  </tr>
</table>

---

## 📁 Project Structure

```
Weather-App/
├── public/
│   ├── index.html          # Main HTML template
│   ├── manifest.json       # PWA manifest
│   ├── robots.txt          # SEO configuration
│   └── weather_icon.svg    # Custom favicon
├── src/
│   ├── images/
│   │   ├── background.jpg  # App background image
│   │   ├── city.jpg        # City weather background
│   │   └── WeatherIcons.gif # Loading animation
│   ├── App.css             # Main application styles
│   ├── App.js              # Root React component
│   ├── apiKeys.js          # API configuration (reads from .env)
│   ├── currentLocation.js  # Current weather component
│   ├── forcast.js          # Weather forecast component
│   ├── index.css           # Global styles
│   └── index.js            # React entry point
├── Images/
│   ├── banner.png          # README banner image
│   └── weather.png         # README screenshot
├── .env                    # Environment variables (gitignored)
├── .env.example            # Environment template
├── .gitignore              # Git ignore rules
├── package.json            # Project dependencies
├── LICENSE                 # MIT License
└── README.md               # Project documentation
```

---

## 🔒 Security Features

<table>
  <tr>
    <td>🔐</td>
    <td><b>Environment Variables</b><br/>API keys stored securely in .env file, never committed to Git</td>
  </tr>
  <tr>
    <td>🔑</td>
    <td><b>API Key Protection</b><br/>Sensitive credentials isolated from source code</td>
  </tr>
  <tr>
    <td>🚫</td>
    <td><b>.gitignore</b><br/>Prevents accidental exposure of secrets and build artifacts</td>
  </tr>
</table>

---

## 🛠️ Tech Stack

<div align="left">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)

</div>

### 📦 Dependencies

| Package | Purpose |
|---------|---------|
| `react` | UI framework |
| `axios` | HTTP requests |
| `react-animated-weather` | Weather icons |
| `react-live-clock` | Real-time clock |
| `react-geolocated` | Geolocation services |

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

![Node.js](https://img.shields.io/badge/Node.js-v14+-339933?style=for-the-badge&logo=node.js&logoColor=white)

![npm](https://img.shields.io/badge/npm-v6+-CB3837?style=for-the-badge&logo=npm&logoColor=white)

### 📥 Installation

1. **Clone the repository**

```bash
git clone https://github.com/ajaygangwar945/Weather-App.git
cd Weather-App
```

1. **Install dependencies**

```bash
npm install
```

1. **Get your API key**

- Visit [OpenWeatherMap](https://openweathermap.org/api)
- Sign up for a free account
- Generate your API key

1. **Configure API key**

   Create a `.env` file in the project root (copy from `.env.example`):

   ```bash
   cp .env.example .env
   ```

   Then open `.env` and add your API key:

   ```env
   REACT_APP_WEATHER_API_KEY=YOUR_API_KEY_HERE
   ```

   > **Note**: The `.env` file is gitignored for security. Never commit API keys to version control.

1. **Start the development server**

   ```bash
   npm start
   ```

   > **Important**: If you already have `npm start` running, you need to restart it for the `.env` changes to take effect.

1. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 💻 Usage

### Search for a City

1. Type the city name in the search bar
2. Click the search icon or press Enter
3. View real-time weather data

### Allow Location Access

1. Click "Allow" when prompted for location access
2. The app will automatically display weather for your current location

---

## 🌐 Deployment

### Deploy to Netlify

[![Deploy to Netlify](https://img.shields.io/badge/Deploy_to-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://app.netlify.com/start/deploy?repository=https://github.com/ajaygangwar945/Weather-App)

### Manual Deployment

```bash
# Build the production version
npm run build

# Deploy the 'build' folder to your hosting service
```

**Important for Netlify Deployment:**

After deploying, you need to add your API key as an environment variable:

1. Go to your Netlify site dashboard
2. Navigate to **Site settings** → **Build & deploy** → **Environment**
3. Click **Add environment variable**
4. Add:
   - **Key**: `REACT_APP_WEATHER_API_KEY`
   - **Value**: Your OpenWeatherMap API key
5. Click **Save**
6. Trigger a new deploy for changes to take effect

**Supported Platforms:**

- ✅ Netlify
- ✅ Vercel
- ✅ GitHub Pages
- ✅ Firebase Hosting

---

## 📸 Screenshots

<div align="center">
  <img src="Images/weather.png" width="80%" alt="Home Screen"/>
  <p><i>Home screen showing current weather</i></p>

</div>

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgments

[![OpenWeatherMap](https://img.shields.io/badge/OpenWeatherMap-API-FE7A16?style=for-the-badge&logo=openweathermap&logoColor=white)](https://openweathermap.org/)

[![React Animated Weather](https://img.shields.io/badge/Weather-Icons-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://www.npmjs.com/package/react-animated-weather)

[![Netlify](https://img.shields.io/badge/Hosted-On_Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://www.netlify.com/)

---

<div align="center">

### ⭐ Star this repository if you found it helpful

Made with ❤️ by Ajay Gangwar

</div>
