import { browser } from '@wdio/globals'
import Page from './page.js';

class LandingPage extends Page {
    get linkABTest() {
        return $('a[href="/abtest"]');
    }

    click() {
        return this.linkABTest.click();
    }

    open() {
        return browser.url(`https://the-internet.herokuapp.com/`);
    }
}

export default new LandingPage();