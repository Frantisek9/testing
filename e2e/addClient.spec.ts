import { test } from '@playwright/test';
import { _login } from './_login';
import { _addClient } from './_addClient';

test('Login, Add and Delete Client', async ({ page }) => {
  const loginPage = new _login(page);
  const addClientPage = new _addClient(page);
  
  await loginPage.navigate();
  await loginPage.login();
  await addClientPage.addClient();
  await addClientPage.deleteClient();
});