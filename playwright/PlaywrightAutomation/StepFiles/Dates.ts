import{Given, When, Then} from "@cucumber/cucumber"
import { chromium } from "playwright-core";
import { expect } from "playwright/test";
let browser:any
let page:any

         Given('open the browser for dates in staticway', async function () {
                 browser = await chromium.launch({
                            headless:false,
                            args:["--start-maximized"]
                        })
            
                        const context = await browser.newContext({viewport:null})
                        page = await context.newPage()
                         //await page.goto("https://testautomationpractice.blogspot.com/")


                         let todaydate= new Date()
                         console.log("========today date=======")
                         console.log(todaydate)

                         //IST format

                         console.log("=========In IST format=========")
                         const currentdate=todaydate.toLocaleDateString()
                         console.log(currentdate)

                         //Yesterday date
                        console.log("===yesterday date in IST ========")
                         const Yesterday=new Date(todaydate)
                         Yesterday.setDate(todaydate.getDate()-1)
                         console.log(Yesterday.toLocaleDateString())

                      
                         //Future date 
                         console.log("===========future date========")
                         const futuredate = new Date(todaydate)
                         futuredate.setDate(todaydate.getDate()+1)
                         console.log(futuredate.toLocaleDateString())

              await page.goto("https://testautomationpractice.blogspot.com/")
              await page.waitForSelector("//input[@id='datepicker']")
             await page.locator("//input[@id='datepicker']").scrollIntoviewIFneeded()
            await page.locator("//input[@id='datepicker']").click()
          await page.locator("//input[@id='datepicker']").fill(futuredate.toLocaleDateString())

          const year =todaydate.getFullYear().toString()
          const month = (todaydate.getMonth()+1).toString()
          const date =todaydate.getDate().toString()
         console.log(month,'-',date,'-',year,'-')
         console.log(date,'/',month,'/',year,)
      //   console.log("//input[@id='datepicker']").fill(month+ "/" +date+ "/" +year)

            


                     
          
         });





           
         