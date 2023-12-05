const { spawn } = require("child_process");


module.exports = function run(scriptArr) {
    //console.log("running command in RunShScript", scriptName, scriptName.split(" "));
    return new Promise((resolve, reject) => {

        let lastOut;
        const ls = spawn("bash", scriptArr);

        ls.stdout.on("data", data => {
            console.log(`${data}`);
            lastOut = data;
        });

        ls.stderr.on("data", data => {
            // console.log(`ls.stderr.on ${data}`);
            // lastOut = data;

            //return reject(data);
        });

        ls.on('error', (error) => {
            console.log(`error message ==>> ${error.message}`);
            lastOut = error.message;

            //return reject(error);
        });

        ls.on("close", code => {
            console.log(`child process exited with code ${code} ${lastOut}`);
            if(code == 0)
                return resolve(code);
            reject(lastOut)
        });
        // exec("sh " + scriptName, (error, stdout, stderr) => {
        //     if (error) {
        //         console.log(`error: ${error.message}`);
        //         return reject(error);
        //     }
        //     if (stderr) {
        //         console.log(`stderr: ${stderr}`);
        //         return reject(stderr);
        //     }
        //     console.log(`stdout: ${stdout}`);
        //     resolve(stdout);
        // });
    });
}



