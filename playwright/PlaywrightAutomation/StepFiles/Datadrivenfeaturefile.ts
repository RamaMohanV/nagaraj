 
 import{Given, When, Then} from "@cucumber/cucumber"
import { chromium } from "playwright-core";
let browser:any
let page:any



 Given('launching the browser  over the featurefile', async function () {
     browser = await chromium.launch({


                                    headless:false,
                                    args:["--start-maximized"]
                                })
                    
                                const context = await browser.newContext({viewport:null})
                                page = await context.newPage()
                              
                             
                  
                 });
        
    


          
         

  

         Then('passing the url over the feature featurefiles {string},{string},{string},{string}', async function (Name, Email,phone,Address){
             await page.goto("https://testautomationpractice.blogspot.com/")

            
             await page.locater("//input[@id='name']").fill(Name)
             
             await page.waitForTimeout("3000")
             
             await page.locater("//input[@id='email']").fill(Email)
             
             await page.waitForTimeout("3000")
             await page.locater("//input[@id='phone']").fill(phone)
             
             await page.waitForTimeout("3000")
             await page.locater("//textarea[@id='textarea']").fill(Address)



         })

