import React from "react";
import RawAnimatedWeather from "react-animated-weather";

// Handle CJS/ESM interop differences in Vite (resolves double-default wrapper)
const AnimatedWeatherComponent =
  RawAnimatedWeather && RawAnimatedWeather.default
    ? RawAnimatedWeather.default
    : RawAnimatedWeather;

export default function ReactAnimatedWeather(props) {
  return <AnimatedWeatherComponent {...props} />;
}

