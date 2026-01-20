import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // Define que a raiz é a pasta atual onde está este arquivo
  rootDir: '.',
  // Procura testes em qualquer subpasta
  testMatch: ['**/*.spec.ts', '**/*.test.ts'],
  verbose: true,
};

module.exports = config;