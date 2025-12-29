import WeatherMainPage from '../pageObjects/SearchMainPage.js';
import { assert } from 'chai';

describe('AccuWeather Search Functionality', () => {

    it('should search for a city and verify the result', async () => {
        
        await browser.url('https://www.accuweather.com');

        try {
            const cookieBtn = await $('//div[contains(@class, "policy-accept")]');
            if (await cookieBtn.isDisplayed()) {
                await cookieBtn.click();
            }
        } catch (error) {

        }

        const searchInput = await $('//form[@class="search-form"]//input');
        await searchInput.click();
        await searchInput.setValue('New York');

        const newYorkResult = await $('//div[contains(@class, "search-results")]//div[contains(., "New York")]');
        await newYorkResult.waitForDisplayed({ timeout: 5000 });
        await newYorkResult.click();

        const cityHeader = await $('//h1[contains(@class, "header-loc")]');
        await cityHeader.waitForDisplayed({ timeout: 10000 });

        const headerText = await cityHeader.getText();
        assert.include(headerText, 'New York', `City header should contain New York`);
    });
});