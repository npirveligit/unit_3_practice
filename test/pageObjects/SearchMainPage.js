import BasePage from '../../framework/page/BasePage.js';
import { Button, TextBox, Label } from '../../framework/elements/index.js';

class WeatherMainPage extends BasePage {
    constructor() {
        super(new Label('//a[contains(@class, "header-logo")]', 'AccuWeather Logo'), 'Weather Main Page');
    }

    get consentButton() {
        return new Button('//div[contains(@class, "policy-accept")]', 'Consent Button');
    }

    get searchInput() {
        return new TextBox('//form[@class="search-form"]//input', 'Search Input Box');
    }

    get searchResultsContainer() {
        return new Label('//div[contains(@class, "search-results")]', 'Search Results Container');
    }

    get firstSearchResult() {
        return new Button('//div[contains(@class, "search-results")]//div[1]', 'First Search Result');
    }

    async searchCity(cityName) {
        const inputElement = await $('//form[@class="search-form"]//input');
        await inputElement.setValue(cityName);
    }
}

export default new WeatherMainPage();