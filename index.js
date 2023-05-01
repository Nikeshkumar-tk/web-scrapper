//Workspace

import PupputeerCore from "./lib/core/index.js"

(async() => {


const scrapper = new PupputeerCore({pageUrl:"https://www.npmjs.com/package/puppeteer"})

scrapper.createPdf({fileName:"testFile"})


})()