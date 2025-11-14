import { test } from "@playwright/test";
import { DashoardPage } from "../../src/pages/pmtool/dashboard_page.ts";
import { LoginPage } from "../../src/pages/pmtool/login_page.ts";

test("PageObjects Exercise - Login and Logout", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashoardPage(page);

  await loginPage.open();
  await loginPage.login("pw_academy", "Playwright321!");
  await dashboardPage.clickProfile();
  await dashboardPage.clickLogout();
});
