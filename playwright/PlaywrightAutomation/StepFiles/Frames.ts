 import{Given, When, Then} from "@cucumber/cucumber"
import { chromium } from "playwright-core";
let browser:any
let page:any

Given('open the browser for frames', async function () {
           browser = await chromium.launch({
               headless:false,
               args:["--start-maximized"]
           })

           const context = await browser.newContext({viewport:null})
           page = await context.newPage()
         });

   

         When('enter url for frames', async function () {
            await page.goto("https://jqueryui.com/");
         
         });

            When('user needs to handle the frames', async function () {
                
                await page.locator("//a[text()='Droppable']").click()
let aa=await page.frameLocator("//iframe[@class='demo-frame']").locator("//p[text()='Drag me to my target']")
let bb=await page.frameLocator("//iframe[@class='demo-frame']").locator("//p[text()='Drop here']")
await aa.dragTo(bb)

            
            })