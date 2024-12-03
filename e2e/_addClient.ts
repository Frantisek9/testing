import { Page } from '@playwright/test';

export class _addClient {
  page: Page;
  url = "https://och.trainerize.com/app/overview";
  clientMenu = '//*[@id="nav_clients" and contains(@data-testid, "leftNavMenu-item-clients") and contains(@class, "leftNavItem border--none leftNavItem--dark")]';
  newClientButton = '//*[@id="clientGrid__toolbar_addClient" and contains(@class, "gtBtn-icon gtBtn-blue pr8 toolbar--canHideButton toolbar--enabledTraining")]';
  newEmail = '//*[@data-testid="addClientDialog-emailInput" and contains(@class, "ant-input")]';
  newUserName = '//*[@data-testid="addClientDialog-firstNameInput"]';
  newLastName = '//*[@data-testid="addClientDialog-lastNameInput"]'; 
  addNewClientButton = '//*[@data-testid="dialog-defaultFooter-confirm-button" and contains(@class, "ant-btn btn btn--medium btn--blue mr8 dsV2 ant-btn-button")]';

  expectedUrl = '//*[@class="flex-center flex-column text-center fullContent"]';


  urlDelete = 'https://och.trainerize.com/app/overview';
  addDeleteNameButton = '//*[@class="searchBar-input" and contains(@data-testid="baseGrid-topbar-searchInput")';
  deleteButton = '//*[@type="checkbox" and contains(@class="rowCheck")]';
  deleteOption = '//*[@id="clientGrid__toolbar_more" and contains(@data-testid="clientGrid-toolbar-more")';
  deleteConfirm = '//*[@class="noTextTransform" and contains(@id="clientGrid__toolbar_more_menu_deleteClient")';
  deleteConfirm2 = '//*[@data-testid="dialog-defaultFooter-confirm-button"]';

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto(this.url);
  }

  async addClient(
    email: string = 'frantisekoch.rere@gmail.com',
    firsthName: string = 'Derek', 
    lastName: string = 'Gregor'

  ) {
    await this.page.click(this.clientMenu);
    await this.page.click(this.newClientButton);
    await this.page.fill(this.newEmail, email);
    await this.page.fill(this.newUserName, firsthName);
    await this.page.fill(this.newLastName, lastName);
    await this.page.click(this.addNewClientButton);
    await this.page.waitForSelector(this.expectedUrl);

  }

  async deleteClient(
    
    deleteName: string = 'Derek Gregor'

) {
    await this.page.goto(this.urlDelete);
    await this.page.waitForTimeout(5000);
    await this.page.click(this.clientMenu);
    await this.page.fill(this.addDeleteNameButton, deleteName);
    await this.page.click(this.deleteButton);
    await this.page.click(this.deleteOption);
    await this.page.click(this.deleteConfirm2);
  }
}