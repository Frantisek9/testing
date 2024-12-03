import { test } from '@playwright/test';
import { _login } from './_login';

test('User can log in successfully', async ({ page }) => {
  const loginPage = new _login(page); 

  await loginPage.navigate(); 
  await loginPage.login(); 
});
