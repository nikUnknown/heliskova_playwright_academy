// tests/learning/api/
// api_asserts.spec.ts

import { expect, test } from "@playwright/test";

test("Exercise: Response Body Asserts", async ({ request }) => {
  const response = await request.get(
    "https://tegb-backend-877a0b063d29.herokuapp.com/eshop/4"
  );
  const responseBody = await response.json();

  expect(
    responseBody,
    "User Response Body Should has property: userId"
  ).toHaveProperty("userId");

  expect(
    typeof responseBody.active,
    "responseBody.active should be a number"
  ).toEqual("number");

  expect(responseBody.id, "responseBody.id should have value 4").toEqual(4);

  expect(
    responseBody.username,
    "responseBody.username has correct value"
  ).toEqual("petrfifka");

  expect(responseBody.email, "responseBody.email has correct value").toEqual(
    "petr.fifka@tredgate.cz"
  );
});
