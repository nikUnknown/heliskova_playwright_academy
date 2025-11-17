import { Locator, Page } from "@playwright/test";

export class RegisterPage {
  readonly page: Page;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly phoneInput: Locator;
  readonly passwordInput: Locator;
  readonly passwordConfirmInput: Locator;
  readonly continueButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.locator("#input-firstname");
    this.lastNameInput = page.locator("#input-lastname");
    this.emailInput = page.locator("#input-email");
    this.phoneInput = page.locator("#input-telephone");
    this.passwordInput = page.locator("#input-password");
    this.passwordConfirmInput = page.locator("#input-confirm");
    this.continueButton = page.locator('input[type="submit"]');
  }

  async fillFirstName(firstNameInput: string) {
    await this.firstNameInput.fill(firstNameInput);
  }

  async fillLastName(lastNameInput: string) {
    await this.lastNameInput.fill(lastNameInput);
  }

  async fillEmail(emailInput: string) {
    await this.emailInput.fill(emailInput);
  }

  async fillPhone(phoneInput: string) {
    await this.phoneInput.fill(phoneInput);
  }

  async fillPassword(passwordInput: string) {
    await this.passwordInput.fill(passwordInput);
  }

  async fillPasswordConfirmation(passwordConfirmInput: string) {
    await this.passwordConfirmInput.fill(passwordConfirmInput);
  }

  async clickToRegister() {
    await this.continueButton.click();
  }
}
