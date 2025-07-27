import {test, expect} from '@playwright/test';

test('test', async({page}) => {
    await page.goto('https://www.demoblaze.com/index.html');
    await page.getByRole('link',{name: 'Log in'}).click();
    await page.locator('#loginusername').fill('tuantran');
    await page.locator('#loginpassword').fill('123456');

    await page.getByRole('button',{name: 'Log in'}).click();
  
})
