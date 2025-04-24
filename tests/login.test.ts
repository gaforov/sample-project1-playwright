import { test, expect } from '../base/baseTest';

test('Valid login shows success message', async ({ page, loginPage }) => {
  await loginPage.loginToApplication('student', 'Password123');
  const actual = await loginPage.loginSuccessMessage.textContent();
  expect(actual).toBe('Logged In Successfully');
});
