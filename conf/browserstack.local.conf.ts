import { config as sharedConfig } from './base.conf';

export const config: WebdriverIO.Config = {
  ...sharedConfig,
  runner: 'local',
  baseUrl: process.env.BASE_URL,
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,
  specs: ['./tests/specs/**/*.ts'],
  capabilities: [
    // {
    //   browserName: 'chrome',
    // },
    // {
    //   browserName: 'firefox',
    // },
    // {
    //   browserName: 'edge',
    // },
    {
      'bstack:options': {
        deviceName: 'iPhone 12',
        realMobile: true,
      },
      browserName: 'safari',
    },
  ],
  services: [
    [
      'browserstack',
      {
        browserstackLocal: true,
      },
    ],
  ],
};
