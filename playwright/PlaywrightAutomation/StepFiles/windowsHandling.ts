 import{Given, When, Then} from "@cucumber/cucumber"
import { chromium } from "playwright-core";
let browser:any
let page:any
Given('Open the browser for window Handling', async function () {
      browser = await chromium.launch({
          headless:false,
        args:["--start-maximized"]
          })
      const context = await browser.newContext({viewport:null})
      let  page1 = await context.newPage()
      await page1.goto("https://www.facebook.com/")
      await page1.waitForTimeout(5000)
      let page2 = await context.newPage()
      await page2.goto("https://www.shadi.com/")
      await page2.waitForTimeout(5000)
      let allpagescount=context.pages()
      await page2.locator("//a[text()='Login']").click()
     await allpagescount[0].bringToFront()
     
      

      await page1.close()
      await page1.browser().close()

        })