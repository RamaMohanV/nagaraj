 import{Given, When, Then} from "@cucumber/cucumber"
import { chromium } from "playwright-core";
import { expect } from "playwright/test";
let browser:any
let page:any


         Given('open the browser for assertions', async function () {
                                        browser = await chromium.launch({
                                            headless:false,
                                            args:["--start-maximized"]
                                        })
                            
                                        const context = await browser.newContext({viewport:null})
                                        page = await context.newPage()
                                      
                                  });

            When('enter url for assertions', async function () {
                 await page.goto("https://testautomationpractice.blogspot.com/")
                 await  expect(page.locater("//input[@id='name']")).toBeEmpty()
                 await page.waitForTimeout(4000)
                 await page.locator("//input[@id='name']").fill("nagaraju")
                 
                 await expect.soft(page.locator("//input[@id='email']")).toBeVisible()

                 await page.locator("//input[@id='email']").fill("nagaraju@1234")
           
         });
