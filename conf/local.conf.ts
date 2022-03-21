import { config as sharedConfig } from './base.conf';

export const config: WebdriverIO.Config = {
  ...sharedConfig,
  runner: 'local',
  headless: false,
  baseUrl: process.env.BASE_URL,
  specs: ['./tests/specs/**/*.ts'],
  services: ['selenium-standalone'],
};
