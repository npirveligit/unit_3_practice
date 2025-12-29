import BasePage from '../../framework/page/BasePage.js';

class SettingsMainPage extends BasePage {
    constructor() {
        super(null, 'Settings Main Page');
    }

    get consentButton() {
        return $('//div[contains(@class, "policy-accept")]');
    }

    get headerMenuIcon() {
        return $('.icon-hamburger');
    }

    get settingsLink() {
        return $('//a[contains(@href, "/settings")]');
    }

    get currentTempText() {
        return $('//*[contains(@class, "temp") and contains(text(), "°")]');
    }
}

export default new SettingsMainPage();