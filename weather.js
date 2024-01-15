#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import {
  printHelp,
  printError,
  printSuccess,
  printWeather,
} from "./services/log.service.js";
import { saveKeyValue, TOKEN_DICTIONARY } from "./services/storage.service.js";
import { getWeather } from "./services/api.service.js";

const saveToken = async (token) => {
  if (!token.length) {
    printError("No token recieved");
    return;
  }

  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token);
    printSuccess("Token saved");
  } catch (error) {
    printError(error.message);
  }
};

const saveCity = async (city) => {
  if (!city.length) {
    printError("No city revieved");
    return;
  }

  try {
    await saveKeyValue(TOKEN_DICTIONARY.city, city);
    printSuccess("City saved");
  } catch (error) {
    printError(error.message);
  }
};

const getForcast = async () => {
  try {
    const weather = await getWeather();

    printWeather(weather);
  } catch (error) {
    if (error?.response?.status === 400 || error?.response?.status === 404) {
      printError("Invalid city");
    } else if (error?.response?.status === 401) {
      printError("Invalid token");
    } else {
      printError(error.message);
    }
  }
};

const initCLI = () => {
  const args = getArgs(process.argv);

  if (args.h) {
    return printHelp();
  }

  if (args.c) {
    return saveCity(args.c);
  }

  if (args.t) {
    return saveToken(args.t);
  }

  getForcast();
};

initCLI();
