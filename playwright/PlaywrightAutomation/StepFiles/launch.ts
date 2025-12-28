import{Given, When, Then} from "@cucumber/cucumber"
import { chromium } from "playwright-core";

let browser:any
let page:any


         Given('open the browser', async function () {

            browser = await chromium.launch({
                headless:false,
                args:["--start-maximized"]
            })

            const context = await browser.newContext({viewport:null})
            page = await context.newPage()
          
         });
         

 

         When('enter url', async function () {

            await page.goto("https://testautomationpractice.blogspot.com/")
       
         });

          When('user enter name', async function () {
          await page.locator("//input[@id='name']").fill("john")
         });

    

         When('user enter email', async function () {

            await page.locator("//input[@id='email']").fill("nagaraju12@gmail.com")

           
         });


  

         When('user enter phonenumber', async function () {
            await page.locator("//input[@id='phone']").fill("1234")


         });


         Then('user enter address', async function () {
            await page.locator("//textarea[@id='textarea']").fill("Hyderabad")

         });

 

       
        

 

