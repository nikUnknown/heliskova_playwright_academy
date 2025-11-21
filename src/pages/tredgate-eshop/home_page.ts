import { Locator, Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly url = "https://tredgate.com/eshop/";
  readonly myAccount: Locator;
  readonly register: Locator;

  constructor(page: Page) {
    this.page = page;
    this.myAccount = page.locator("#top-links a i.fa-user");
    this.register = page.locator(
      '.dropdown-menu a[href="https://tredgate.com/eshop/index.php?route=account/register"]'
    );
  }

  async open() {
    await this.page.goto(this.url);
  }

  async clickMyAccount() {
    await this.myAccount.click();
  }

  async clickRegister() {
    await this.register.click();
  }
}
