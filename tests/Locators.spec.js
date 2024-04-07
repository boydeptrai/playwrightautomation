//const {test, expected} = require('@playwright/test)
import {test, expect} from '@playwright/test';

test('Locators', async ({page}) =>{
    await page.goto("https://www.demoblaze.com/index.html");

    // click on login button  -property
    // await page.locator('id=login2').click();
    await page.click('id=login2');

    // provide username -CSS
    // await page .locator('#loginusername').fill("tuantran")
    await page.fill('#loginusername','tuantran')
    // await page.type('#loginusername','tuantran');

    // provide password -CSS
    await page.fill("input[id='loginpassword']",'test@123');

    // click on login button
    await page.click("//button[normalize-space()='Log in']");

    // verify logout link presence
    const logoutlink = page.locator("//a[normalize-space()='Log out']");

    await expect(logoutlink).toBeVisible();

    await page.close();
})