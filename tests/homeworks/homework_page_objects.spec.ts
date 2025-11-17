import { test } from "@playwright/test";
import { HomePage } from "../../src/pages/tredgate-eshop/home_page.ts";
import { RegisterPage } from "../../src/pages/tredgate-eshop/register_page.ts";

test("Register new account", async ({ page }) => {
  const homePage = new HomePage(page);
  const registerPage = new RegisterPage(page);

  await homePage.open();
  await homePage.clickMyAccount();
  await homePage.clickRegister();
  await registerPage.fillFirstName("Lucie");
  await registerPage.fillLastName("Novakova");
  await registerPage.fillEmail("test_new@tredgate.cz");
  await registerPage.fillPhone("123456789");
  await registerPage.fillPassword("Playwright321!");
  await registerPage.fillPasswordConfirmation("Playwright321!");
  await registerPage.clickToRegister();
});
