import BasePage from '../../framework/page/BasePage.js';
import { Label } from '../../framework/elements/index.js';

class WeatherCityPage extends BasePage {
    constructor() {
        super(new Label('//h1[contains(@class, "header-loc")]', 'City Header'), 'Weather City Page');
    }

    get cityHeader() {
        return new Label('//h1[contains(@class, "header-loc")]', 'City Name Header');
    }

    get currentTemperature() {
        return new Label('//div[contains(@class, "cur-con-weather-card")]//div[@class="temp"]', 'Current Temperature');
    }
}

export default new WeatherCityPage();