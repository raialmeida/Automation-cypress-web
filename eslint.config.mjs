import pluginCypress from 'eslint-plugin-cypress/flat'

export default [{
    plugins: {
        cypress: pluginCypress
    },
    rules: {
        "no-extra-semi": "error",
        "no-trailing-spaces": 1,
        "no-multi-spaces": 1,
        "no-multiple-empty-lines": 1,
        "no-const-assign": 2,
        "no-unused-vars": "error",
        semi: ["error", "never"],
        indent: [2, 4],
        "cypress/no-assigning-return-values": "error",
        "cypress/no-unnecessary-waiting": "error",
        "cypress/assertion-before-screenshot": "warn",
        "cypress/no-force": "warn",
        "cypress/no-async-tests": "error",
        "cypress/no-pause": "error",
    },
}]