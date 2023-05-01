import puppeteer from "puppeteer"

async function getBrowserInstance(){
    return await puppeteer.launch()
} 

class PupputeerCore{
    
    constructor({pageUrl}){
       this.createPdf = this.createPdf.bind(this)
       this.pageUrl = pageUrl
    }

   
    async createPdf(params){
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        await page.goto(this.pageUrl)
        await page.pdf({path:params?.path || `outputs/pdfs/${params.fileName}.pdf`})
        await browser.close()
    }
}

export default PupputeerCore