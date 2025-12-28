
         import{Given, When, Then} from "@cucumber/cucumber"
import { chromium } from "playwright-core";
import{Test1,Test2,Test3} from "../Files/Data.json"

let browser:any
let page:any
setdefaulttime:{30*1000}


   Given(' open the browser for data sets', async function () {
     browser = await chromium.launch({


                                  headless:false,
                                  args:["--start-maximized"]
                              })
                  
                              const context = await browser.newContext({viewport:null})
                              page = await context.newPage()
                            
                           
                
               });
      

          
          When('using different data sets for Test1', async function () {

          await page.goto("https://testautomationpractice.blogspot.com/")
          await page.waitForTimeout(5000)

          await page.locater("//input[@id='name']").fill(Test1.Name)
          await page.waitForTimeout(2000)
          await page.locater("//input[@id='email']").fill(Test1.Address)
          await page.waitForTimeout(2000)

          await page.locater("//input[@id='phone']").fill(Test1.phone)
          await page.waitForTimeout(2000)
          await page.locater("//textarea[@id='textarea']").ScrollIntoviewIFneeded()
          await page.locater("//textarea[@id='textarea']").fill(Test1.Address)
          await page.waitForTimeout(2000)

           
         });


           When('using different data sets for Test2', async function () {

         await page.goto("https://testautomationpractice.blogspot.com/")
         await page.waitForTimeout(2000)

          await page.locater("//input[@id='name']").fill(Test2.Name)
          await page.waitForTimeout(2000)
          await page.locater("//input[@id='email']").fill(Test2.Email)
          await page.waitForTimeout(2000)

          await page.locater("//input[@id='phone']").fill(Test2.phone)
          await page.waitForTimeout(2000)

          await page.locater("//textarea[@id='textarea']").fill(Test2.Address)
          await page.waitForTimeout(2000)
         

           
         });
         
           When('using different data sets for Test3', async function () {
            
         await page.goto("https://testautomationpractice.blogspot.com/")
         await page.waitForTimeout(2000)

          await page.locater("//input[@id='name']").fill(Test3.Name)
          await page.waitForTimeout(2000)
          await page.locater("//input[@id='email']").fill(Test3.Email)
          await page.waitForTimeout(2000)

          await page.locater("//input[@id='phone']").fill(Test3.phone)
          await page.waitForTimeout(2000)

          await page.locater("//textarea[@id='textarea']").fill(Test3.Address)
          await page.waitForTimeout(2000)
         

           
         });


          