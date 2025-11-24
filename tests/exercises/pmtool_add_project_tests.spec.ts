import { test, expect } from "@playwright/test";
import { LoginPage } from "../../src/pages/pmtool/login_page.ts";

test("Exercise: Asserts", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage
    .open()
    .then((login) => login.login("pw_academy", "Playwright321!"))
    .then((dashboard) => dashboard.clickProjects());
  const projectsTable = page.locator(".table-scrollable table");
  await expect(projectsTable, "Projects Table is Visible").toBeVisible();
  await page.locator('[test_id="Add Project"]').click();
  const nameInput = page.locator('div[data-testid="Name"] input');
  await expect(nameInput, "Name Input is Visible").toBeVisible();
  const saveButton = page.locator("button[type='submit']");
  await expect(saveButton, "Save Button have text").toHaveText("Save");
});

/*
Cvičení - kontrola pmtool add project(⌛8:00)
Vytvořte nový testovací soubor ve složce tests/exercises: pmtool_add_project_tests.spec.ts
Vytvoř nový test:
Otevře PMTool a přihlásí se
Otevře menu Projects (počkejte na zobrazení tabulky, jinak testy mohou padat) - lokátor: , metoda: await expect().toBeVisible()
Klikne na Add Project Zkontroluje v otevřeném modalu:
Viditelnost: input Name, lokátor: div[data-testid="Name"] input
Text: tlačítko Save, lokátor: button[type='submit']
Spusť test

* Výzva
V challenges složce vytvoř nový test soubor: ats_product_tests_challenge
Vytvoř test:
Otevři stránku: https://automationteststore.com/
Otevři detail produktu: BeneFit Girl Meets Pearl
Zkontroluj:
Viditelnost ceny
Input na počet má hodnotu 1
Text pole oznamujícího, že je produkt vyprodán
Spusť test

*/
