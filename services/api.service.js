import { getKeyValue, TOKEN_DICTIONARY } from "./storage.service.js";
import axios from "axios";

export const getIcon = (icon) => {
  switch (icon.slice(0, -1)) {
    case "01":
      return "☀️";
    case "02":
      return "🌤️";
    case "03":
      return "☁️";
    case "04":
      return "☁️";
    case "09":
      return "🌧️";
    case "10":
      return "🌦️";
    case "11":
      return "🌩️";
    case "13":
      return "❄️";
    case "50":
      return "🌫️";
  }
};

export const getWeather = async () => {
  const token =
    process.env.TOKEN ?? (await getKeyValue(TOKEN_DICTIONARY.token));

  const city = process.env.CITY ?? (await getKeyValue(TOKEN_DICTIONARY.city));

  if (!token) {
    throw new Error("No token, enter token with -t [API_KEY]");
  }

  const params = { q: city, appid: token, lang: "ru", units: "metric" };

  const { data } = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params,
    }
  );

  return data;
};
