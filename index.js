//Workspace

import PupputeerCore from "./lib/core/index.js"

(async() => {


const scrapper = new PupputeerCore({pageUrl:"https://goku.to/home"})

scrapper.createPdf({fileName:"testFile"})
scrapper.getScreenshot({fileName:"testFile"})

})()


