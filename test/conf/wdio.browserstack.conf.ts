import { config as sharedConfig } from './wdio.conf';

export const config: WebdriverIO.Config = {
  ...sharedConfig,
  baseUrl: 'http://localhost',
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,
  services: ['browserstack']
};
