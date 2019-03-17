console.time("Package Loading");
const awsParamStoreEnv = require("aws-parameter-store-env");
console.timeEnd("Package Loading");

let parametersLoaded = false;

module.exports = async (options) => {
    if (!parametersLoaded) {
        console.time("Parameter Loading");
        await awsParamStoreEnv.config(options);
        console.timeEnd("Parameter Loading");
        parametersLoaded = true;
    }
}