const path = require("path");
const getDirName = filename => path.basename(path.dirname(filename));

const outputText = textValue => console.log(textValue);
сonst outputTextError = textValue => console.error(textValue);
const exitSucces = () => process.exit(0);
const readCommandProcess = () => process.argv[2];
const exitFail = () => process.exit(1);

const textWithoutComands = `Привет пользователь!\nЭта программа будет запускать сервер «${getDirName(
  __filename
)}».\nАвтор: Кекс.`;
const textComandHelp = `Доступные команды:\n--help — печатает этот текст;\n--version — печатает версию приложения;`;
const versionApp = `v.0.0.1`;
const textComandVersion = `${versionApp}`;
const textUnkownCommand = `Неизвестная команда ${readCommandProcess()}.\nЧтобы прочитать правила использования приложения, наберите "--help"`;

const commands = {
  "--version": textComandVersion,
  "--help": textComandHelp
};

if (process.argv.length === 2) {
  outputText(textWithoutComands);
  exitSucces();
} else if (commands[readCommandProcess()]) {
  outputText(commands[readCommandProcess()]);
  exitSucces();
} else {
  outputTextError(textUnkownCommand);
  exitFail();
}
