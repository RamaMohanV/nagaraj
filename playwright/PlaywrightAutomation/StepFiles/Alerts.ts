import{Given, When, Then} from "@cucumber/cucumber"
import { chromium, Dialog } from "playwright-core";
import { expect } from "playwright/test";
let browser:any
let page:any


         Given(': user launch the browser in alerts', async function () {

                          browser = await chromium.launch({
                                                        headless:false,
                                                        args:["--start-maximized"]
                                                    })
                                        
                                                    const context = await browser.newContext({viewport:null})
                                                    page = await context.newPage()
                                                  
                                              });


         Then(': user enter the URL for alerts in playwright', async function () {
            await page.goto("https://the-internet.herokuapp.com/javascript_alerts")


          
        // simple alert        
        await page.on('dialog',  (dialog:Dialog) =>{
            //retrun the type of alert
            console.log("type of alert",dialog.type())

            //return the messge type of the alert
            console.log("alert messege",dialog.message())

            dialog.accept()

        })
            await page.locator("//button[text()='Click for JS Alert']").click()
          
         });