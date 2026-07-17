import { expect , test} from '@playwright/test';

/**
 * Write a Playwright test that logs into a website, checks the user profile page for specific data, and then logs out.
 */
test('first question', async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    await retryoperation(async ()=>{
        await expect(page.locator('.app_logo')).toHaveText('Swag Labs');
    });
 
    await page.locator('#react-burger-menu-btn').click();

    await page.locator('#logout_sidebar_link').click();

    
    await expect(page.locator('#login-button')).toBeVisible();

})  

/**
 * 4. Implement a retry mechanism in Playwright to handle flaky 
 * network requests or intermittent failures.
 */

//custom retry function 

async function retryoperation(
    operation:()=>Promise<void>,
    retry:number=3
):Promise<void>{
    for (let attempt=1;attempt<=retry; attempt++){

        try{
            await operation();
            console.log(`operation success at ${attempt}`);
            return;
        }catch(error){
            console.log(`Attemp ${attempt } failed`)
            if (attempt==retry){
                throw error
            }
        }
    }
}


//**
// Describe how you would configure Playwright to run tests in parallel across multiple browsers 
// (e.g., Chromium, Firefox, WebKit) and devices. */

/**
 * 
 */