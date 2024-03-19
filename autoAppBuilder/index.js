// import data from './dummy-data/appData.json'
const RunShScript = require('./lib/scriptRunner')
const data = require('./dummy-data/appData.json');

init();

async function init() {
  try {
    const {appName, packageName} = data;
    console.log('data', appName, packageName);
    if (appName && packageName) {
      await buildApp(appName,packageName);
    }
  } catch (error) {
    console.log("Error Inside init fun", error);
  }
}

async function buildApp(appName, packageName) {
  try {
    commandArr = [
      `./AppBuilder.sh`,
      `--appName`, `${appName}`,
      `--packageName`, `${packageName}`,
    ];
    await RunShScript(commandArr);
  } catch (error) {
    console.log("error inside build App", error);
  }
}
