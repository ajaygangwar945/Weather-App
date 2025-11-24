# Live Weather App

A React-based weather application that displays real-time weather data using the OpenWeatherMap API.

## Features

*   **Real-time Weather**: Displays current temperature, humidity, and weather conditions.
*   **Geolocation Support**: Automatically detects your current location to show relevant weather data.
*   **Dynamic Icons**: Visual representation of weather conditions using `react-animated-weather`.
*   **Live Clock**: Shows the current time and date.
*   **Responsive Design**: Works seamlessly on desktop and mobile devices.

## Tech Stack

*   **Frontend**: React.js
*   **API**: OpenWeatherMap
*   **Libraries**:
    *   `axios` for API requests
    *   `react-animated-weather` for weather icons
    *   `react-live-clock` for time display
    *   `react-geolocated` for location services

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

*   Node.js installed on your machine.
*   npm (Node Package Manager).

### Installation

1.  **Clone the repository** (if applicable) or navigate to the project directory:
    ```bash
    cd weatherApp
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

### Configuration

1.  **API Key**:
    The project uses OpenWeatherMap API. You can find the configuration in `src/apiKeys.js`.
    To use your own API key:
    *   Sign up at [OpenWeatherMap](https://openweathermap.org/).
    *   Open `src/apiKeys.js` and replace the key:
        ```javascript
        module.exports = {
          key: "YOUR_API_KEY",
          base: "https://api.openweathermap.org/data/2.5/",
        };
        ```

### Running the App

Start the development server:

```bash
npm start
```

The app will run in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

## Building for Production

Build the app for production to the `build` folder:

```bash
npm run build
```

It correctly bundles React in production mode and optimizes the build for the best performance.
