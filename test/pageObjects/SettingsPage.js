import BasePage from '../../framework/page/BasePage.js';

class SettingsPage extends BasePage {
    constructor() {
        super(null, 'Settings Page');
    }

    get unitDropdown() {
        return $('#unit'); 
    }

    get imperialOption() {
        return $('//option[contains(text(), "Imperial")]');
    }

    async openUnitDropdown() {
        await this.unitDropdown.waitForDisplayed({ timeout: 10000 });
        await this.unitDropdown.scrollIntoView();
        await this.unitDropdown.click();
    }

    async selectImperial() {
        await this.imperialOption.waitForExist({ timeout: 5000 });
        await this.imperialOption.click();
    }
}

export default new SettingsPage();