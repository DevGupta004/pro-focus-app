// import data from './dummy-data/appData.json'
const RunShScript = require('./lib/scriptRunner')
const data = require('./dummy-data/appData.json');

init();

async function init() {
  const {appName, packageName} = data;
  console.log('data', appName, packageName);
  if (appName && packageName) {
    await buildApp(appName,packageName );
  }
}

async function buildApp(appName, packageName) {

    commandArr = [
        `./ProFocus/AAB/AppBuilder.sh`,
        `--appName`, `${appName}`,
        `--icon`, `${packageName}`,
    ];

    await RunShScript(commandArr);
}
