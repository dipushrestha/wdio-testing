import { config as sharedConfig } from "./base.conf";

export const config: WebdriverIO.Config = {
  ...sharedConfig,
  baseUrl: process.env.BASE_URL,
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,
  logLevel: "info",
  services: ["browserstack"],
};
