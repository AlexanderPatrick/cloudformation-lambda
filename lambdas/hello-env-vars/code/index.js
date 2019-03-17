// const AWS = require('aws-sdk');
// AWS.config.update({ region: 'us-east-1' });

// const encrypted = process.env['secret'];
// let decrypted;

async function processEvent(event, context) {
    const response = {
        message: "Hello World with environment variables.",
        envVarFromCFTemplate: process.env.environmentVariableFromCloudformationTemplate,
        envVarFromParameterStore: process.env.environmentVariableFromParameterStore,
        envVarFromCFParameter: process.env.cloudformationParameterFromParameterStore,
    };
    console.log(response);
    return response;
}

exports.handler = async (event, context) => {
    // if (decrypted === undefined) {
    //     const kms = new AWS.KMS();
    //     try {
    //         const data = await kms.decrypt({ CiphertextBlob: new Buffer(encrypted, 'base64') }).promise();
    //         decrypted = data.Plaintext.toString('ascii');
    //     } catch (err) {
    //         console.log('Decrypt error:', err);
    //         throw err;
    //     }
    // }
    return await processEvent(event, context);
};
