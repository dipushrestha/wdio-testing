import { config as sharedConfig } from './wdio.conf';

export const config: WebdriverIO.Config = {
  ...sharedConfig,
  baseUrl: 'http://localhost',
  services: ['selenium-standalone']
};
