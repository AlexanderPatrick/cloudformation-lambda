describe('index.js', async() => {
    const index = require('../code/index');
    it('should have a handler function', async() => {
        expect(typeof(index.handler)).toBe('function');
    });

    describe('handler()', async() => {
        const handler = index.handler;
        it('should return an object with a message key saying "Hello World triggered from a cloudwatch event."', async() => {
            const result = await handler();
            expect(result.message).toBe('Hello World triggered from a cloudwatch event.');
        })
    })
})