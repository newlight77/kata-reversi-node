module.exports = {
  preset: 'ts-jest',
  roots: ['<rootDir>/test'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  testMatch: [
    '**/?(*.)+(spec|test).+(ts|js)',
  ],
  coverageReporters: ['html', 'text', 'text-summary', 'cobertura']
};
