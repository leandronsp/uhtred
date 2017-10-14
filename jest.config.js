module.exports = {
  verbose: true,
  watchman: false,
  modulePaths: ['<rootDir>/src'],
  setupTestFrameworkScriptFile: '<rootDir>/src/test/test.helper.js',
  setupFiles:['raf/polyfill'] // Workaround due to a warning on react compat: https://stackoverflow.com/a/46656658/2313681
};
