import test from "@playwright/test";
import { expect } from "@playwright/test";

test("should render a header", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/Todo list/);
});
