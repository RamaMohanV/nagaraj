import{Given, When, Then} from "@cucumber/cucumber"
import { chromium } from "playwright-core";
let browser:any
let page:any
 Given('open the browser for fileupload', async function () {
        
                                browser = await chromium.launch({
                                    headless:false,
                                    args:["--start-maximized"]
                                })
                    
                                const context = await browser.newContext({viewport:null})
                                page = await context.newPage()
                            })

         When('enter url for fileupload', async function () {

              await page.goto("https://testautomationpractice.blogspot.com/")

         });
            When('user neeeds to upload the file', async function () {
           

                await page.locator("//form[@id='singleFileForm']").scrollIntoViewIfNeeded()
                await page.locator("//input[@id='multipleFilesInput']").setInputFiles(["C:\\Users\\Administrator\\Downloads\\Harikrishna_Resume CyberSecurity.docx", "C:\\Users\\Administrator\\Downloads\\Nagaraju_Resume.docx"])
                await page.locator("//button[text()='Upload Multiple Files']").click()
         });

