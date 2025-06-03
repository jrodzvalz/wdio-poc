import { browser } from '@wdio/globals';
import { SUPPORTED_OCR_LANGUAGES } from "@wdio/ocr-service";

class SW {
    async clickOnText() {
        await browser.ocrClickOnText({
            text: "ID",
            contrast: 0.5,
            /* haystack: {
                x: 240,
                y: 360,
                width: 400,
                height: 300,
            }, */
            language: SUPPORTED_OCR_LANGUAGES.ENGLISH,
        });
    }

    open() {
        browser.url('http://localhost:8080');
    }
}

export default new SW();