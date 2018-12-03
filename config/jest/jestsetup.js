module.exports = {
  rootDir: '../../',
  clearMocks: true,
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'identity-obj-proxy',
    '\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
  resolver: null,
  testRegex: '/__tests__/.*\\.spec\\.jsx$',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coveragePathIgnorePatterns: ['src/index.js', 'src/store.js'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
