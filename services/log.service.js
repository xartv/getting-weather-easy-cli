import chalk from "chalk";
import dedent from "dedent-js";

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
