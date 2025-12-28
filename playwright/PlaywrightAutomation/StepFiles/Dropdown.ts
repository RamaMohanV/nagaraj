import{Given, When, Then} from "@cucumber/cucumber"
import { chromium } from "playwright-core";

let browser:any
let page:any
         Given('open the browser for dropdown', async function () {

            browser = await chromium.launch({
                headless:false,
                args:["--start-maximized"]
            })

            const context = await browser.newContext({viewport:null})
            page = await context.newPage()

         });

   

         When('enter url for dropdown', async function () {
            await page.goto("https://testautomationpractice.blogspot.com/")
         });

  

         When('user to verify dropdown options', async function () {

            await page.locator("//select[@id='country']").scrollIntoViewIfNeeded()
            var dp=await page.locator("//select[@id='country']")
             let aa=await dp.selectOption("India")
            

         });
