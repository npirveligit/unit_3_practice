const Button = require('../../framework/elements/Button');

class FramePage {
    constructor() {
        this.iFrameLink = new Button('//a[text()="iFrame"]', 'iFrame Link');
    }

    async clickIFrame() {
        await this.iFrameLink.click();
    }
}

module.exports = new FramePage();