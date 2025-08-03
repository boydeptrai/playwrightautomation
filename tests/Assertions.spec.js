const {test, expect} = require("@playwright/test");
const { timeLog } = require("console");
const exp = require("constants");
const path = require("path");

test('AssertionTest', async({page}) => {
    //Open app url
    await page.goto('https://demo.nopcommerce.com/register');

    //expect(page).toHaveURL()
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');
    
    //expect(locator).toBeVisible()
    const  logoElement = await page.locator('.header-logo');
    await expect(logoElement).toBeVisible();

    //expect(locator).toBeEnable()   control is enable
    const searchStoreBox = await page.locator('#small-search-box-form');
    await expect(searchStoreBox).toBeEnabled();

    //expect(locator).toBeCheck()  Radio/Checkbox is checked

    //radio button
    const maleRadioButton = await page.locator('#gender-male');
    await maleRadioButton.click(); //Select radio button
    await expect(maleRadioButton).toBeChecked();

    //Check box
    const newsLetterCheckbox = await page.locator('#Newsletter');
    await expect(newsLetterCheckbox).toBeChecked();

    //expect(locator).toHaveAttribute()
    const regButton  = await page.locator('#register-button');
    await expect(regButton).toHaveAttribute('type','submit');

     //expect(page).toHaveTitle()
    await expect(page).toHaveTitle('nopCommerce demo store. Register');

    //expect(locator).toHaveText() Element matches text
    await expect(await page.locator('.page-title h1')).toHaveText('Register');

    //expect(locator).toContainText()
    await expect(await page.locator('.page-title h1')).toContainText('Reg');

    //expect(locator).toHaveValue(value) Input has a value
    const emailInput = await page.locator('#Email');
    await emailInput.fill('test@demo.com');
    await expect(emailInput).toHaveValue('test@demo.com');
    
});

