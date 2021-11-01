module.exports = {
    env: {
        'jest/globals': true
    },
    plugins: ['eslint-plugin-jest'],
    rules: {
        'jest/consistent-test-it': ['error', { fn: 'test' }],
        'jest/expect-expect': ['error'],
        'jest/no-disabled-tests': ['error'],
        'jest/no-focused-tests': ['error'],
        'jest/no-identical-title': ['error'],
        'jest/no-jasmine-globals': ['error'],
        'jest/no-jest-import': ['error'],
        'jest/no-test-prefixes': ['error'],
        'jest/no-test-return-statement': ['error'],
        'jest/prefer-to-be-null': ['error'],
        'jest/prefer-to-be-undefined': ['error'],
        'jest/prefer-to-have-length': ['error'],
        'jest/valid-describe': ['error'],
        'jest/valid-expect-in-promise': ['error'],
        'jest/valid-expect': ['error']
    }
};
