import { SUPPORTED_OCR_LANGUAGES } from "@wdio/ocr-service";
import { Key, Point, Region, FileType, saveImage, imageToJimp, loadImage } from '@nut-tree-fork/nut-js';
import * as fs from 'fs';
import { MIMEType } from "util";

class Disney {
    // use orc
    async clickOnSearchText() {
        await browser.ocrClickOnText({
            text: 'PELICULAS',
            contrast: 0.5,
            haystack: {
                x: 150,
                y: 0,
                width: 930,
                height: 80,
            },
            language: SUPPORTED_OCR_LANGUAGES.SPANISH,
        });
    }

    // use robonut
    async clickOnImage() {
        const location = await browser.robot.image.finder.findMatch({ needle: './images/robonut.png'});
        console.log('location', location);
        const point = await browser.robot.rect.centerOf(location.location);
        await browser.robot.mouse.move(await browser.robot.rect.straightTo(point));
        await browser.robot.mouse.leftClick();
        await browser.pause(3000);
    }

    // use robonut
    async selectBirthday() {
        await browser.robot.mouse.setPosition(new Point(880, 450));
        await browser.robot.keyboard.type(Key.Down);
        await browser.robot.keyboard.type(Key.Tab);
        await browser.robot.keyboard.type("7");
        await browser.robot.keyboard.type(Key.Tab);
        await browser.robot.keyboard.type("2000");
        await browser.pause(5000);
    }

    // use robonut
    async takeAScreenshot() {
        /**
         * capture, captureRegion
         * captures a screenshot and store it to the filesystem
         * note: filePath not working
         */
        /* const region = new Region (0, 0, 200, 200);
        await browser.robot.screen.capture ('auto_ss', FileType.JPG);
        await browser.robot.screen.captureRegion ('auto_ss_region', region, FileType.JPG); */

        /**
         * grab, grabRegion
         * allows to retrieve an Image, Image.data is a buffer
         */
        /* const image = await browser.robot.screen.grab ();
        console.log (image);

        const rgbImage = image.toRGB ();
        console.log (rgbImage);
        const buf = Buffer.from (image.data);
        console.log (buf);

        fs.writeFileSync ('./grab_image.png', buf); */

        /* const regionImage = await browser.robot.screen.grabRegion (region);
        console.log (regionImage);
        fs.writeFileSync ('./grab_regionImage.png', image.data); */

        // const originalImage = await loadImage ();
        // const jimpImage = imageToJimp (image);
        // jimpImage.getBuffer ()
        // console.log (jimp);
    }

    open () {
        browser.maximizeWindow();
        return browser.url(`https://www.disneylatino.com/`);
    }
}

export default new Disney();