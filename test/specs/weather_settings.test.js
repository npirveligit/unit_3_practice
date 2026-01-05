import SettingsMainPage from '../pageObjects/SettingsMainPage.js';
import SettingsPage from '../pageObjects/SettingsPage.js';
import { assert } from 'chai';

describe('Test Case 2: Settings & Units', () => {
    
    it('should change temperature unit from Celsius to Fahrenheit', async () => {
        
        await browser.url('https://www.accuweather.com');
        await browser.maximizeWindow();

        try {
            await browser.pause(2000);
            if (await SettingsMainPage.consentButton.isDisplayed()) {
                await SettingsMainPage.consentButton.click();
            }
        } catch (e) {
            console.log('Cookie banner not found or already closed.');
        }

        console.log('Verifying default units...');
        await SettingsMainPage.currentTempText.waitForDisplayed({ timeout: 10000 });
        const initialTemp = await SettingsMainPage.currentTempText.getText();
        
        assert.include(initialTemp, 'C', 'Temperature should be in Celsius initially');

        console.log('Navigating to Settings...');
        await SettingsMainPage.headerMenuIcon.waitForDisplayed();
        await SettingsMainPage.headerMenuIcon.click();
        
        await browser.pause(1000); // Wait for menu animation
        
        await SettingsMainPage.settingsLink.waitForDisplayed();
        await SettingsMainPage.settingsLink.click();

        await browser.pause(3000); 
        let currentUrl = await browser.getUrl();

        if (currentUrl.includes('google_vignette') || currentUrl.includes('#')) {
            console.log('Ad Detected! Refreshing page to clear it...');
            await browser.refresh();
            await browser.pause(5000); // Wait for reload
            
            currentUrl = await browser.getUrl();
            if (!currentUrl.includes('/settings')) {
                console.log('Redirected Home. Navigating to Settings again...');
                await SettingsMainPage.headerMenuIcon.waitForDisplayed();
                await SettingsMainPage.headerMenuIcon.click();
                await browser.pause(1000);
                await SettingsMainPage.settingsLink.waitForDisplayed();
                await SettingsMainPage.settingsLink.click();
                await browser.pause(3000);
            }
        }
        
        console.log('Changing units to Imperial...');
        await SettingsPage.openUnitDropdown();
        await SettingsPage.selectImperial();
        
        // Wait for setting to apply
        await browser.pause(2000);

        // --- STEP 6: VERIFY NEW UNIT (FAHRENHEIT) ---
        console.log('Verifying new units...');
        await browser.back();
        
        // Wait for Home Page to reload
        await browser.pause(3000); 
        await SettingsMainPage.currentTempText.waitForDisplayed({ timeout: 10000 });
        
        const newTemp = await SettingsMainPage.currentTempText.getText();
        assert.include(newTemp, 'F', 'Temperature should be in Fahrenheit after change');
    });
});