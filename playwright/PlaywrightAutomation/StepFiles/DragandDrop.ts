import{Given, When, Then} from "@cucumber/cucumber"
import { chromium } from "playwright-core";
let browser:any
let page:any


         Given('open the browser for drag', async function () {

            
                        browser = await chromium.launch({
                            headless:false,
                            args:["--start-maximized"]
                        })
            
                        const context = await browser.newContext({viewport:null})
                        page = await context.newPage()
                      
                     
          
         });

   

         When('enter url for drag', async function () {

            await page.goto("https://testautomationpractice.blogspot.com/")


         });

         
         When('user needs to drag the element', async function () {

            await page.locator("//p[text()='Drag me to my target']").scrollIntoViewIfNeeded()
            
          let sor=  await page.locator("//p[text()='Drag me to my target']")
          let tar=await page.locator("//p[text()='Drop here']")
          await sor.dragTo(tar)

          
         });


