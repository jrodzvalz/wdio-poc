import { SUPPORTED_OCR_LANGUAGES } from "@wdio/ocr-service";
import { Key, Point, Region, FileType, saveImage, imageToJimp, loadImage } from '@nut-tree-fork/nut-js';
import * as fs from 'fs';
import { MIMEType } from "util";

class Disney {
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

    async clickOnImage() {
        const location = await browser.robot.image.finder.findMatch({ needle: './images/lilo.png'});
        console.log('location', location);
        const point = await browser.robot.rect.centerOf(location.location);
        await browser.robot.mouse.move(await browser.robot.rect.straightTo(point));
        await browser.robot.mouse.leftClick();
        await browser.pause(3000);
    }

    async selectBirthday() {
        await browser.robot.mouse.setPosition(new Point(880, 450));
        await browser.robot.keyboard.type(Key.Down);
        await browser.robot.keyboard.type(Key.Tab);
        await browser.robot.keyboard.type("7");
        await browser.robot.keyboard.type(Key.Tab);
        await browser.robot.keyboard.type("2000");
        await browser.pause(5000);
    }

    async takeAScreenshot() {
        /**
         * capture, captureRegion
         */
        /* const region = new Region(0, 0, 200, 200);
        await browser.robot.screen.capture("auto_ss", FileType.JPG, ..."");
        await browser.robot.screen.captureRegion("auto_ss_region", region, FileType.JPG); */

        /**
         * grab, grabRegion
         */
        /* const image = await browser.robot.screen.grab();
        console.log(image);

        const rgbImage = image.toRGB();
        console.log(rgbImage);
        const buf = Buffer.from(image.data);
        console.log(buf);

        fs.writeFileSync("./grab_image.png", buf); */

        /* const regionImage = await browser.robot.screen.grabRegion(region);
        console.log(regionImage);
        fs.writeFileSync("./grab_regionImage.png", image.data); */

        const image = await browser.robot.screen.grab();
        // const originalImage = await loadImage();
        console.log(image);
        // const jimpImage = imageToJimp(image).getBuffer();
        console.log(jimp);
    }

    open () {
        browser.maximizeWindow();
        return browser.url(`https://www.disneylatino.com/`);
    }
}

export default new Disney();