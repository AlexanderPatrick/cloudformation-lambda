console.log('init');
const loadParameters = require('/opt/nodejs/loadParameters');

exports.handler = async () => {
    console.log('Started');
    await loadParameters({
        path: `/${process.env.Environment}/`,
        parameters: require('./parameters'),
        region: process.env.Region,
        withDecryption: true,
    });
    console.log('Parameters Loaded:', process.env);

    const response = {
        message: "Hello World, this time with environment variables from Parameter Store.",
        liveLoadedVar: process.env.secret,
    };
    console.log(response);
    return response;
};