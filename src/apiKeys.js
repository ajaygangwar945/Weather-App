// Visit https://api.openweathermap.org & then signup to get our API keys for free
const apiKeys = {
  key:
    import.meta.env.VITE_WEATHER_API_KEY ||
    import.meta.env.REACT_APP_WEATHER_API_KEY ||
    "",
  base: "https://api.openweathermap.org/data/2.5/",
};
export default apiKeys;
