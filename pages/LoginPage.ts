import { Locator, Page } from '@playwright/test';
import { envConfig } from '../config/environments';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly loginSuccessMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#submit');
    this.loginSuccessMessage = page.locator('.post-title');
  }

  async loginToApplication(username: string, password: string) {
    // await this.page.goto(envConfig.baseUrl);  // <- This is (moved) already handled in baseTest.ts
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
