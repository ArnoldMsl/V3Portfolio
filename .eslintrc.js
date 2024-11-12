module.exports = {
    parser: '@typescript-eslint/parser', // Indique qu'on utilise TypeScript
    parserOptions: {
        ecmaVersion: 2020, // Support des fonctionnalités ECMAScript modernes
        sourceType: 'module', // Permet d'utiliser les `import`/`export`
        ecmaFeatures: {
            jsx: true, // Permet de lint le JSX
        },
    },
    settings: {
        react: {
            version: 'detect', // Détecte automatiquement la version de React
        },
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended', // Recommandations pour TypeScript
    ],
    rules: {
        // Exemples de règles personnalisées
        'react/react-in-jsx-scope': 'off', // Plus nécessaire depuis React 17+
        '@typescript-eslint/explicit-module-boundary-types': 'off', // Règle souvent trop restrictive
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Ignorer les vars commençant par _
    },
}
