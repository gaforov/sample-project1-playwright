# Test info

- Name: Dashboard shows welcome message
- Location: D:\VSCodeProjects\SampleProject1Playwright\tests\dashboard.test.ts:3:5

# Error details

```
Error: locator.textContent: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('.post-title')

    at DashboardPage.getWelcomeText (D:\VSCodeProjects\SampleProject1Playwright\pages\DashboardPage.ts:13:38)
    at D:\VSCodeProjects\SampleProject1Playwright\tests\dashboard.test.ts:4:36
```

# Page snapshot

```yaml
- link "Press \"Enter\" to skip to content":
  - /url: "#main-container"
- banner:
  - navigation
  - link "Practice Test Automation":
    - /url: https://practicetestautomation.com/
    - img "Practice Test Automation"
  - navigation:
    - navigation:
      - list:
        - listitem:
          - link "Home":
            - /url: https://practicetestautomation.com/
        - listitem:
          - link "Practice":
            - /url: https://practicetestautomation.com/practice/
        - listitem:
          - link "Courses":
            - /url: https://practicetestautomation.com/courses/
        - listitem:
          - link "Blog":
            - /url: https://practicetestautomation.com/blog/
        - listitem:
          - link "Contact":
            - /url: https://practicetestautomation.com/contact/
- main:
  - heading "Test login" [level=2]
  - list:
    - listitem: This is a simple Login page. Students can use this page to practice writing simple positive and negative LogIn tests. Login functionality is something that most of the test automation engineers need to automate.
    - listitem: "Use next credentials to execute Login: Username: student Password: Password123"
  - text: Username
  - textbox "Username"
  - text: Password
  - textbox "Password"
  - button "Submit"
  - text: Your username is invalid!
  - separator
  - 'heading "Test case 1: Positive LogIn test" [level=5]'
  - list:
    - listitem: Open page
    - listitem: Type username student into Username field
    - listitem: Type password Password123 into Password field
    - listitem: Push Submit button
    - listitem: Verify new page URL contains practicetestautomation.com/logged-in-successfully/
    - listitem: Verify new page contains expected text ('Congratulations' or 'successfully logged in')
    - listitem: Verify button Log out is displayed on the new page
  - separator
  - 'heading "Test case 2: Negative username test" [level=5]'
  - list:
    - listitem: Open page
    - listitem: Type username incorrectUser into Username field
    - listitem: Type password Password123 into Password field
    - listitem: Push Submit button
    - listitem: Verify error message is displayed
    - listitem: Verify error message text is Your username is invalid!
  - separator
  - 'heading "Test case 3: Negative password test" [level=5]'
  - list:
    - listitem: Open page
    - listitem: Type username student into Username field
    - listitem: Type password incorrectPassword into Password field
    - listitem: Push Submit button
    - listitem: Verify error message is displayed
    - listitem: Verify error message text is Your password is invalid!
- contentinfo:
  - text: © Copyright 2020
  - link "Practice Test Automation.":
    - /url: https://practicetestautomation.com/
  - text: All rights reserved |
  - link "Privacy Policy":
    - /url: https://practicetestautomation.com/privacy-policy/
```

# Test source

```ts
   1 | import { Locator, Page } from '@playwright/test';
   2 |
   3 | export class DashboardPage {
   4 |   readonly page: Page;
   5 |   readonly welcomeMessage: Locator;
   6 |
   7 |   constructor(page: Page) {
   8 |     this.page = page;
   9 |     this.welcomeMessage = page.locator('.post-title');
  10 |   }
  11 |
  12 |   async getWelcomeText(): Promise<string | null> {
> 13 |     return await this.welcomeMessage.textContent();
     |                                      ^ Error: locator.textContent: Test timeout of 30000ms exceeded.
  14 |   }
  15 | }
```