import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';
import SecurePage from '../pageobjects/secure.page.js';
import LandingPage from '../pageobjects/landing.page.js';
import AddRemoveElementsPage from '../pageobjects/addRemoveElements.page.js';
import ABTest from '../pageobjects/aBTest.page.js';
import Google from '../pageobjects/google.page.js';
import Disney from '../pageobjects/disney.page.js';
import SW from '../pageobjects/sw.js';

const pages = {
    login: LoginPage,
    landing: LandingPage,
    addRemoveElements: AddRemoveElementsPage,
    abtest: ABTest,
    google: Google,
    disney: Disney,
    sw: SW,
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining(message));
});

// landing page
When(/^I click on (\w+) link/, async(link) => {
    await LandingPage.click(link);
});

Then(/^I should go to abtest page/, async () => {
    await expect(ABTest.hdrDescription).toBeExisting();
});

// add_remove_elements page
When(/^I click on Add Element button/, async () => {
    await AddRemoveElementsPage.clickAddElement();
});

Then(/^I click on Delete button/, async () => {
    await AddRemoveElementsPage.clickDelete();
});

// google page
When(/^I click on gmail tab/, async () => {
    // await Google.clickOnText();
    await Google.getElementPositionByText();
});

Then(/^I should see a login button/, async () => {
    // await expect(WorkdayAccenture.linkPrivacy).toBeExisting();
    // await expect(WorkdayAccenture.linkPrivacy).toHaveText('Privacy');
});

When(/^I click on search input/, async () => {
    await Google.clickOnPosition();
});

Then(/^I type Accenture for searching/, async () => {
    await Google.typeSearchText();
});

Then(/^I click on search result/, async () => {
    await Google.clickOnSearchResult();
});

Then(/^I click on apps menu/, async () => {
    await Google.clickOnAppsMenu();
});

// disney latino page
When(/^I click on peliculas menu/, async () => {
    await Disney.clickOnSearchText();
});

When(/^I click on image/, async () => {
    await Disney.clickOnImage();
});

Then(/^I select birthday/, async () => {
    await Disney.selectBirthday();
});

When(/^I take a screenshot/, async () => {
    await Disney.takeAScreenshot();
});

// sw sample
When(/^I click on text/, async () => {
    await SW.clickOnText();
});