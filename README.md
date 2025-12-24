<div align="center">

# 🌤️ Live Weather App

### Real-time Weather Forecasting Application

[![Netlify Status](https://api.netlify.com/api/v1/badges/ba1cbf72-821d-422a-9520-a414ce0b32b7/deploy-status)](https://app.netlify.com/projects/weather-forcasting-temperature/deploys)
[![React](https://img.shields.io/badge/React-16.13.1-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live-Demo-success?style=flat-square&logo=netlify)](https://weather-forcasting-temperature.netlify.app/)
[![Features](https://img.shields.io/badge/Documentation-Features-blue?style=flat-square&logo=readthedocs)](#features)
[![Report Bug](https://img.shields.io/badge/Report-Bug-red?style=flat-square&logo=github)](https://github.com/ajaygangwar945/Weather-App/issues)
[![Request Feature](https://img.shields.io/badge/Request-Feature-brightgreen?style=flat-square&logo=github)](https://github.com/ajaygangwar945/Weather-App/issues)

</div>


</div>



---

## 🎯 About

A beautiful, responsive weather application built with React that provides real-time weather information for any location worldwide. Get instant access to current weather conditions, temperature, humidity, wind speed, and more!

<div align="center">
  <img src="https://img.shields.io/badge/Status-Live-success?style=for-the-badge" alt="Status">
  <img src="https://img.shields.io/badge/Maintained-Yes-success?style=for-the-badge" alt="Maintained">
</div>

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
    <td><b>Responsive Design</b><br/>Works perfectly on desktop, tablet, and mobile</td>
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

## 🛠️ Tech Stack

<div align="center">

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

- ![Node.js](https://img.shields.io/badge/Node.js-v14+-339933?logo=node.js&logoColor=white) Node.js (v14 or higher)
- ![npm](https://img.shields.io/badge/npm-v6+-CB3837?logo=npm&logoColor=white) npm (v6 or higher)

### 📥 Installation

1. **Clone the repository**

```bash
git clone https://github.com/ajaygangwar945/Weather-App.git
cd Weather-App
```

2. **Install dependencies**

```bash
npm install
```

3. **Get your API key**

- Visit [OpenWeatherMap](https://openweathermap.org/api)
- Sign up for a free account
- Generate your API key

4. **Configure API key**

Open `src/apiKeys.js` and add your API key:

```javascript
module.exports = {
  key: "YOUR_API_KEY_HERE",
  base: "https://api.openweathermap.org/data/2.5/",
};
```

5. **Start the development server**

```bash
npm start
```

6. **Open your browser**

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

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ajaygangwar945/Weather-App)

### Manual Deployment

```bash
# Build the production version
npm run build

# Deploy the 'build' folder to your hosting service
```

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

Distributed under the MIT License. See `LICENSE` for more information.

---

## 👨‍💻 Author

**Ajay Gangwar**

- [![GitHub](https://img.shields.io/badge/GitHub-ajaygangwar945-black?logo=github&style=flat-square)](https://github.com/ajaygangwar945)
- [![Project](https://img.shields.io/badge/Project-Weather--App-blue?logo=github&style=flat-square)](https://github.com/ajaygangwar945/Weather-App)
- [![Live Demo](https://img.shields.io/badge/Live-Demo-success?logo=netlify&style=flat-square)](https://weather-forcasting-temperature.netlify.app/)

---

## 🙏 Acknowledgments

- [![OpenWeatherMap](https://img.shields.io/badge/OpenWeatherMap-API-orange?style=flat-square)](https://openweathermap.org/)
 

- [![React Animated Weather](https://img.shields.io/badge/React%20Animated%20Weather-Icons-blue?style=flat-square)](https://www.npmjs.com/package/react-animated-weather)


- [![Netlify](https://img.shields.io/badge/Hosted%20on-Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white)](https://www.netlify.com/)


---

<div align="center">

### ⭐ Star this repository if you found it helpful!

Made with ❤️ by Ajay Gangwar

</div>

