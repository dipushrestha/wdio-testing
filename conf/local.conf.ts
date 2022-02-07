import { config as sharedConfig } from './base.conf';

export const config: WebdriverIO.Config = {
  ...sharedConfig,
  runner: 'local',
  baseUrl: 'http://localhost',
  specs: ['./tests/specs/**/*.ts'],
  services: ['selenium-standalone'],
};
