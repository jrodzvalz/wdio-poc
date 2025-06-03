import { browser, $ } from '@wdio/globals';
import { SUPPORTED_OCR_LANGUAGES } from "@wdio/ocr-service";
import { Key, Point } from '@nut-tree-fork/nut-js';

class Google {
    get tabGmail() {
        return $('a[aria-label="Gmail "]');
    }

    get popUpSignIn() {
        return $('span[id="promo_label_id"');
    }

    get popUpPresentation() {
        return $('div[role="presentation"')
    }

    async clickOnText() {
        await browser.ocrClickOnText({
            text: "Gmail",
            contrast: 0.5,
            /* haystack: {
                x: 240,
                y: 360,
                width: 400,
                height: 300,
            }, */
            language: SUPPORTED_OCR_LANGUAGES.ENGLISH,
        });
        // await this.tabGmail.click();
    }

    // did not work with empty text
    async clickOnInput() {
        await browser.ocrClickOnText({
            text: '',
            contrast: 0.5,
            haystack: {
                x: 730,
                y: 400,
                width: 300,
                height: 20,
            },
        });
    }

    async clickOnPosition() {
        // await browser.setTimeout({ 'pageLoad': 20000 });
        await this.popUpSignIn.isDisplayed();
        await browser.robot.mouse.setPosition(new Point(250, 545));
        await browser.pause(10000);
        await browser.robot.mouse.leftClick();
    }

    async typeSearchText() {
        await browser.waitUntil(async () => await this.popUpPresentation.isDisplayed());
        // await this.popUpPresentation.isDisplayed();
        await browser.robot.keyboard.type("Accenture");
        await browser.robot.keyboard.type(Key.Enter);
        await browser.pause(5000);
    }

    async clickOnSearchResult() {
        /* await browser.ocrClickOnText({
            text: 'Accenture: Mexico | Let There Be Change',
            contrast: 0.5,
        }); */
        await browser.waitUntil(async () => await browser.robot.mouse.setPosition(new Point(70, 250)));
        await browser.robot.mouse.leftClick();
        await browser.pause(5000);
    }

    async clickOnAppsMenu() {
        const location = await browser.robot.image.finder.findMatch({ needle: './images/menu_test.png'});
        const point = await browser.robot.rect.centerOf(location.location);
        await browser.robot.mouse.move(await browser.robot.rect.straightTo(point));
        await browser.robot.mouse.leftClick();
    }

    open () {
        // browser.maximizeWindow();
        return browser.url(`https://www.google.com/`);
    }
}

export default new Google();