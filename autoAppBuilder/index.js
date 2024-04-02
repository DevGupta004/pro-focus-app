// import data from './dummy-data/appData.json'
const RunShScript = require('./lib/scriptRunner')
const data = require('./dummy-data/appData.json');

init();

async function init() {
  try {
    const {appName, packageName, prodBuild} = data;
    console.log('data', appName, packageName, prodBuild);
    if (appName && packageName) {
      await buildApp(appName,packageName, prodBuild);
    }
  } catch (error) {
    console.log("Error Inside init fun", error);
  }
}

async function buildApp(appName, packageName, prodBuild) {
  try {
    commandArr = [
      `./AppBuilder.sh`,
      `--appName`, `${appName}`,
      `--packageName`, `${packageName}`,
      `--prodBuild`, `${prodBuild}`,
    ];
    await RunShScript(commandArr);
  } catch (error) {
    console.log("error inside build App", error);
  }
}
