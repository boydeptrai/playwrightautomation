const { test, expect } = require("@playwright/test");

test('handle radio button', async ({page}) => { 
    await page.goto('https://testautomationpractice.blogspot.com/');

    //Radio button
    await page.locator("//input[@value='option2']").check();

    //await page.check("//input[@value='option2']");
    await expect(await page.locator("//input[@value='option2']")).toBeChecked();
    await expect(await page.locator("//input[@value='option2']").isChecked()).toBeTruthy();
    
    await expect(await page.locator("//input[@value='option1']").isChecked()).toBeFalsy();

    await page.waitForTimeout(5000);
 })

