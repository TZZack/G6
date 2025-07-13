const esm = ['internmap', 'd3-*', 'lodash-es', 'chalk'].map((d) => `_${d}|${d}`).join('|');

module.exports = {
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.tsx?$': '@swc/jest',
  },
  testRegex: '(/__tests__/.*\\.(test|spec))\\.(ts|tsx|js|vue)$',
  collectCoverageFrom: ['src/**/*.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'vue', 'json'],
  transformIgnorePatterns: [`<rootDir>/node_modules/.pnpm/(?!(${esm}))`],
  moduleNameMapper: {
    '@antv/g6': '<rootDir>/../g6/src',
    '^vue$': '<rootDir>/node_modules/vue/dist/vue.common.js'
  }
};