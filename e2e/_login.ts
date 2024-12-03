import { Page, expect } from '@playwright/test';

export class _login {
  page: Page;
  url = "https://och.trainerize.com/app/login";
  usernameSelector = "//*[@id='emailInput']";
  passwordSelector = "//*[@id='passInput']";
  loginButtonSelector = "//*[@data-testid='signIn-button']";
  expectedUrl = "https://och.trainerize.com/app/overview";

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto(this.url);
  }

  async login(username: string = "frantisekoch.fit@gmail.com", password: string = "Fo111343234") {
    await this.page.fill(this.usernameSelector, username);
    await this.page.fill(this.passwordSelector, password);
    await this.page.click(this.loginButtonSelector);
    await expect(this.page).toHaveURL(this.expectedUrl);
  }
}
