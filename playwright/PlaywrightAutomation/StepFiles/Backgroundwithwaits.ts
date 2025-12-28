
 import{Given, When, Then} from "@cucumber/cucumber"
import { chromium } from "playwright-core";
let browser:any
let page:any

Given('Open the browser', async function () {
                
                            browser = await chromium.launch({
                                headless:false,
                                args:["--start-maximized"]
                            })
                
                            const context = await browser.newContext({viewport:null})
                            page = await context.newPage()
                          
                         
              
             });
    

           
        When('enter the url', async function () {
           await page.goto("https://demo.cyclos.org/ui/home")
         });

  
       
         When('user click on the login button', async function () {
            await page.locator("//div[text()=' Login ']").click();
          await page.waitForSelector("//input[@type='text']",{timeout:2000})
          
         });

         Then('enter valid credentials', async function () {
           

            await page.locator("//input[@type='text']").fill("demo")
            await page.locator("//input[@type='password']").fill("1234")

         });

           
        



         Then('click on the login button', async function () {
            await page.waitForTimeout(4000)
            await page.locator("//span[text()='Submit']").click();

         });

  

         Then('user able to click on payuser', async function () {

            await page.waitForLoadState("load",{timeout:4000})
            await page.locator("//div[text()=' Pay user ']").click();
         });

      

         Then('user able to click on directory', async function () {

           await page.locator("//div[text()=' Directory ']").click();


         });

