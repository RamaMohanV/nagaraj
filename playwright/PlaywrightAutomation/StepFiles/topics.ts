import{Given, When, Then} from "@cucumber/cucumber"
import { chromium } from "playwright-core";
let browser:any
let page:any

         Given('open the browser for methods', async function () {
              browser = await chromium.launch({
                            headless:false,
                            args:["--start-maximized"]
                        })

           const context = await browser.newContext({viewport:null})
           page = await context.newPage()
        
         });

  

         When('enter url for methods', async function () {
           await page.goto("https://testautomationpractice.blogspot.com/")

         });

   

         When('user enter name for methods', async function () {
           await page.locator("//input[@id='name']").fill("john")

           
         });
         
         When('user enter type the text', async function () {
            
           await page.locator("//input[@id='field1']").scrollIntoViewIfNeeded()
           await page.locator("//input[@id='field1']").fill("well come to playwright")
         });

          When('user enter the text in field2', async function () {
            await page.locator("//input[@id='field2']").fill("learning playwright automation")
            
         });





         
       
         