const {  test, expect} = require("@playwright/test")

test('handle input box', async ({page}) => { 
    await page.goto('https://testautomationpractice.blogspot.com/');

    //Input box - firstname
    await expect(await page.locator("//input[@id='name']")).toBeVisible();
    await expect(await page.locator("//input[@id='name']")).toBeEmpty();
    await expect(await page.locator("//input[@id='name']")).toBeEditable();
    await expect(await page.locator("//input[@id='name']")).toBeEnabled();

    await page.locator("//input[@id='name']").fill("Tuan");

    await page.waitForTimeout(5000);
 })