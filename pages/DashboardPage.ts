import { Locator, Page } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly welcomeMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.welcomeMessage = page.locator('.post-title');
  }

  async getWelcomeText(): Promise<string | null> {
    return await this.welcomeMessage.textContent();
  }
}