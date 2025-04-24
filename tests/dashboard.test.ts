import { test, expect } from '../base/baseTest';

test('Dashboard shows welcome message', async ({ dashboardPage }) => {
  const text = await dashboardPage.getWelcomeText();
  expect(text).toContain('Logged In Successfully');
});
