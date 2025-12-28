import{Given, When, Then} from "@cucumber/cucumber"
import { chromium } from "playwright-core";

let browser:any
let page:any
       
         Given(': user launch the browser for webtable', async function () {

             browser = await chromium.launch({
                            headless:false,
                            args:["--start-maximized"]
                        })
            
                        const context = await browser.newContext({viewport:null})
                        page = await context.newPage()
            
                     })


          Then(': usre enter the url for webtable', async function () {
            await page.waitForTimeout(5000)
            await page.goto("https://testautomationpractice.blogspot.com/")
            await page.waitForTimeout(5000)
            await page.locater("//h2[text()='Static Web Table']").scrollIntoviewIFneeded()
            await page.locater("//table[@name='BookTable']/tbody/tr[5]/td[3]").click()
            
            


          
         });