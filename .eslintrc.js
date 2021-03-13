module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true // allow EsLint to recognize the module global whic is specific to Node.js
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:monorepo/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,  // es2021, see 'env' above
        sourceType: 'module'
    },
    settings: {
        'react': {
            'version': 'detect'
        },
        'import/parser': {
            '@typescript-eslint/parser': ['.ts', '.tsx']
        },
        'import/resolver': {
            node: {
                extensions: ['.ts', '.tsx'],
                typescript: {} // this loads <rootdir>/tsconfig.json to eslint
            }
        }
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        'import/no-extraneous-dependencies': ['error'],
        'react/prop-types': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }]
    }
};
