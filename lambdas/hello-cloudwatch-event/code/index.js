exports.handler = async (event) => {
    const response = {
        message: "Hello World triggered from a cloudwatch event.",
        event,
    };
    console.log(response);
    return response;
};