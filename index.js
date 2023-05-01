// import puppeteer from "puppeteer";
// import MediaUtilities from "./lib/utils/media.js";

import PupputeerCore from "./lib/core/index.js"

(async() => {


// const browser = await puppeteer.launch()
// const page = await browser.newPage()

// await page.goto("https://learn-in-public.vercel.app/")

// await page.screenshot({path:"screenshot.png"})

// await browser.close()

const scrapper = new PupputeerCore({pageUrl:"https://www.npmjs.com/package/puppeteer"})

scrapper.createPdf({fileName:"testFile"})


})()