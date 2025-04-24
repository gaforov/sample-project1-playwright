# Test info

- Name: Valid login shows success message
- Location: D:\VSCodeProjects\SampleProject1Playwright\tests\login.test.ts:3:5

# Error details

```
Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://dev.practicetestautomation.com/practice-test-login/
Call log:
  - navigating to "https://dev.practicetestautomation.com/practice-test-login/", waiting until "load"

    at D:\VSCodeProjects\SampleProject1Playwright\base\baseTest.ts:22:14
```

# Page snapshot

```yaml
- heading "This site can’t be reached" [level=1]
- paragraph: Check if there is a typo in dev.practicetestautomation.com.
- paragraph
- list:
  - listitem:
    - text: If spelling is correct,
    - link "try running Windows Network Diagnostics":
      - /url: javascript:diagnoseErrors()
    - text: .
- text: DNS_PROBE_FINISHED_NXDOMAIN
- button "Reload"
```

# Test source

```ts
   1 | import { test as base, expect, TestInfo } from '@playwright/test';
   2 | import { LoginPage } from '../pages/LoginPage';
   3 | import { DashboardPage } from '../pages/DashboardPage';
   4 | import { envConfig } from '../config/environments';
   5 | import { renameSync, existsSync, mkdirSync } from 'fs';
   6 | import * as path from 'path';
   7 |
   8 | export const test = base.extend<{
   9 |   loginPage: LoginPage;
  10 |   dashboardPage: DashboardPage;
  11 | }>({
  12 |   loginPage: async ({ page }, use) => {
  13 |     await use(new LoginPage(page));
  14 |   },
  15 |   dashboardPage: async ({ page }, use) => {
  16 |     await use(new DashboardPage(page));
  17 |   },
  18 | });
  19 |
  20 | // ✅ Centralized navigation before every test (like @BeforeMethod in Java)
  21 | test.beforeEach(async ({ page }) => {
> 22 |   await page.goto(envConfig.baseUrl); // universal entry point
     |              ^ Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://dev.practicetestautomation.com/practice-test-login/
  23 | });
  24 |
  25 |
  26 | export { expect };
  27 |
```