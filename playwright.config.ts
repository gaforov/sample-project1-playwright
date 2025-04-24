import { PlaywrightTestConfig } from '@playwright/test';
import { envConfig } from './config/environments';
import path from 'path';

const timestamp = new Date()
  .toLocaleString('sv-SE', { hour12: false }) // Locale gives ISO-style format with local time
  .replace(/[\s:]/g, '-'); // Replace spaces and colons with dashes


const config: PlaywrightTestConfig = {
  testDir: './tests',
  timeout: envConfig.defaultTimeout,
  retries: envConfig.isCI ? 2 : 0,
  outputDir: path.join(__dirname, 'test-results', timestamp),
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
