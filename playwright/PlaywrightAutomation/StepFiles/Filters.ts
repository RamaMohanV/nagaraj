import{Given, When, Then} from "@cucumber/cucumber"
import { chromium } from "playwright-core";
let browser:any
let page:any
       
         Given('open the browser for filters', async function () {
            
                      browser = await chromium.launch({
                     headless:false,
                      args:["--start-maximized"]
                            })
                                                    
                  const context = await browser.newContext({viewport:null})
                        page = await context.newPage()
                                                              
                       });
        

   

         When('enter url for filters', async function () {
            await page.goto("https://testautomationpractice.blogspot.com/")
            await page.locator("//input[@id='male']").scrollIntoViewIfNeeded()

            await page.waitForTimeout(5000)
            await page.locator("//div[@class='form-check form-check-inline']/label")
                 .filter({ hastext: 'Friday' }).click()  

             await page.locator("//div[@class='form-check form-check-inline']/label")
                 .filter({ hastext: 'Wednesday' }).click()

                  await page.locator("//div[@class='form-check form-check-inline']/label")
                 .filter({ hastext: 'Thursday' }).click()


         });