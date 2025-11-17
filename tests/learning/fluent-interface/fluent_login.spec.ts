// tests/learning/fluent-interface/
// fluent_login.spec.ts
import { test } from "@playwright/test";
import { LoginPage } from "../../../src/pages/pmtool/login_page.ts";

test("Login Test Using Fluent Interface", async ({ page }) => {
  const loginPage = new LoginPage(page); // ? Constructor je vždy synchronní! Nelze vytvářet v rámci fluent bez const
  await loginPage.open().then((login) => login.fillUsername);
});
