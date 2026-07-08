# Playwright MCP Tools Used - Test Execution Report

## Test Summary
- **Test Date**: 2026-07-08
- **URL Tested**: https://app.vwo.com/
- **Test Type**: End-to-End Login Authentication Test
- **Test Result**: PASS ✓
- **Error Message Captured**: "Your email, password, IP address or location did not match"

---

## Tools Invoked During Execution

### 1. **mcp_playwright_browser_navigate**
- **Purpose**: Navigate to the application URL
- **Input**: URL = `https://app.vwo.com/`
- **Output**: Successfully navigated to login page with URL `https://app.vwo.com/#/login`
- **Status**: ✓ Success

### 2. **mcp_playwright_browser_snapshot**
- **Purpose**: Capture accessibility tree snapshot of the login page to identify form elements
- **Input**: Current page state
- **Output**: Accessibility snapshot with element references (e18 for email, e21 for password, e35 for sign-in button)
- **Usage Count**: 2 times
- **Status**: ✓ Success

### 3. **mcp_playwright_browser_type**
- **Purpose**: Fill in form fields with test data
- **Input #1**: Email field (ref=e18) with value `testuser.random.7284@test.com`
- **Input #2**: Password field (ref=e21) with value `RandomPass@12345789`
- **Output**: Both fields successfully populated with test credentials
- **Usage Count**: 2 times
- **Status**: ✓ Success

### 4. **mcp_playwright_browser_click**
- **Purpose**: Click the "Sign in" button to submit the form
- **Input**: Button element reference (ref=e35)
- **Output**: Form submitted successfully, server responded with authentication error
- **Status**: ✓ Success

### 5. **mcp_playwright_browser_take_screenshot**
- **Purpose**: Capture a screenshot of the error message for documentation
- **Input**: 
  - Filename: `d:\playwright\PW_MCP\mcp_task\screenshots\vwo-login-error.png`
  - Scale: CSS pixels
  - Type: PNG
- **Output**: Screenshot saved at `mcp_task\screenshots\vwo-login-error.png`
- **Status**: ✓ Success

---

## Test Execution Details

### Step-by-Step Execution

1. **Navigation (mcp_playwright_browser_navigate)**
   - Opened https://app.vwo.com/
   - Page loaded successfully with title "Login - Wingify"

2. **Page Analysis (mcp_playwright_browser_snapshot)**
   - Analyzed page structure
   - Identified form elements:
     - Email textbox: ref=e18 (placeholder: "Enter email ID")
     - Password textbox: ref=e21 (placeholder: "Enter password")
     - Sign in button: ref=e35

3. **Data Entry**
   - **Random Email Generated**: testuser.random.7284@test.com
   - **Random Password Generated**: RandomPass@12345789
   
4. **Form Population (mcp_playwright_browser_type)**
   - Email field filled with: `testuser.random.7284@test.com`
   - Password field filled with: `RandomPass@12345789`

5. **Form Submission (mcp_playwright_browser_click)**
   - Clicked "Sign in" button
   - Server processed the request

6. **Error Verification (mcp_playwright_browser_snapshot)**
   - Error message appeared in UI
   - Exact message captured: "Your email, password, IP address or location did not match"

7. **Documentation (mcp_playwright_browser_take_screenshot)**
   - Screenshot of error state captured and saved

---

## Test Results

| Item | Value |
|------|-------|
| **Test URL** | https://app.vwo.com/ |
| **Test Credentials - Email** | testuser.random.7284@test.com |
| **Test Credentials - Password** | RandomPass@12345789 |
| **Error Message** | Your email, password, IP address or location did not match |
| **Screenshot Location** | d:\playwright\PW_MCP\mcp_task\screenshots\vwo-login-error.png |
| **Test Status** | PASS ✓ |
| **Authentication Error Detected** | YES ✓ |

---

## MCP Tools Summary

| # | Tool Name | Call Count | Status |
|---|-----------|-----------|--------|
| 1 | mcp_playwright_browser_navigate | 1 | ✓ |
| 2 | mcp_playwright_browser_snapshot | 2 | ✓ |
| 3 | mcp_playwright_browser_type | 2 | ✓ |
| 4 | mcp_playwright_browser_click | 1 | ✓ |
| 5 | mcp_playwright_browser_take_screenshot | 1 | ✓ |
| **TOTAL** | **5 Unique Tools** | **7 Total Calls** | ✓ All Success |

---

## Conclusion

The end-to-end authentication test was executed successfully. The Playwright MCP tools were used to:
- Navigate to the application
- Analyze page structure
- Populate form fields with random credentials
- Submit the authentication request
- Verify that the expected authentication error message was displayed
- Capture evidence via screenshot

All operations completed without errors, and the application responded as expected with an authentication failure message for invalid credentials.
