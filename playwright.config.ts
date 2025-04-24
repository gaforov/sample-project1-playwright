import { PlaywrightTestConfig } from '@playwright/test';
import { envConfig } from './config/environments';

const config: PlaywrightTestConfig = {
  testDir: './tests',
  timeout: envConfig.defaultTimeout,
  retries: envConfig.isCI ? 2 : 0,
  use: {
    headless: true,
    baseURL: envConfig.baseUrl,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  reporter: [['list'], ['html', { open: 'never' }]],
};

export default config;
