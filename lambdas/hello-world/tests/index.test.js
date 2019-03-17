describe('index.js', async() => {
    const index = require('../code/index');
    it('should have a handler function', async() => {
        expect(typeof(index.handler)).toBe('function');
    });

    describe('handler()', async() => {
        const handler = index.handler;
        it('should return "Hello World"', async() => {
            expect(await handler()).toBe('Hello World');
        })
    })
})