import chalk from "chalk";
import dedent from "dedent-js";
import { getIcon } from "./api.service.js";

export const printError = (error) => {
  console.log(`${chalk.bgRed(" ERROR ")} ${error}`);
};

export const printSuccess = (message) => {
  console.log(`${chalk.bgGreen.black(" SUCCESS ")} ${message}`);
};

export const printHelp = () => {
  console.log(
    dedent(`${chalk.bgCyan.black(" HELP ")}
    Без параметров - вывод походы
    -c [CITY] для установки города
    -h для вывода помощи
    -t [API_KEY] для сохранения токена
    `)
  );
};

export const printWeather = (weather) => {
  const icon = getIcon(weather?.weather?.[0]?.icon);

  console.log(
    dedent(`${chalk.bgWhiteBright.black(" WEATHER ")} in ${weather.name}
  ${icon}  ${weather?.weather?.[0]?.description}
  TEMP: ${weather?.main?.temp} C
  FEELS_LIKE: ${weather?.main?.feels_like} C
  HUMIDITY: ${weather.main.humidity}%
  WIND: ${weather.wind.speed} m/s
  `)
  );
};
