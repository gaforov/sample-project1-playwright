import { test as base, expect, TestInfo } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { envConfig } from '../config/environments';
import { renameSync, existsSync, mkdirSync } from 'fs';
import * as path from 'path';

export const test = base.extend<{
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
}>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },
});

// ✅ Centralized navigation before every test (like @BeforeMethod in Java)
test.beforeEach(async ({ page }) => {
  await page.goto(envConfig.baseUrl); // universal entry point
});


export { expect };
