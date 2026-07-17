import { test, expect } from '@playwright/test';

/**
 * . Write a test that intercepts and mocks an API response before a network request is made using Playwright.
 */

test('Mock Booking API', async ({ page }) => {

    await page.route('**/booking/1', async (route) => {

        await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify({
                firstname: 'Om',
                lastname: 'Gutty',
                totalprice: 5000,
                depositpaid: false,
                bookingdates: {
                    checkin: '2026-07-20',
                    checkout: '2026-07-25'
                },
                additionalneeds: 'Lunch'
            })
        });

    });

    // Call the API from the browser context
    const response = await page.evaluate(async () => {

        const res = await fetch('https://restful-booker.herokuapp.com/booking/1');
        return await res.json();

    });

    console.log(response);

    expect(response.firstname).toBe('Om');
    expect(response.lastname).toBe('Gutty');
    expect(response.totalprice).toBe(5000);

});