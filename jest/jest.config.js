module.exports = {
    rootDir: '..',
    collectCoverage: true,
    coverageDirectory: 'jest/coverage',
    coverageReporters: ['text','lcov'],
    collectCoverageFrom: [
        'lambdas/**/*.js',
    ],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
    verbose: true,
}