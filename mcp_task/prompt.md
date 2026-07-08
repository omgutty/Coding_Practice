Use Playwright MCP to execute the following end-to-end test.

Project Requirements:
- Save all screenshots in: ./screenshots/
- Save a report of all Playwright MCP tools invoked during execution in: ./tools/mcp-tools-used.md

Test Steps:
1. Open https://app.vwo.com/.
2. Wait until the page is fully loaded.
3. Generate a random email address.
4. Generate a random password.
5. Fill the Email field.
6. Fill the Password field.
7. Click the "Sign in" button.
8. Wait up to 10 seconds for the response.
9. Verify that an authentication error message is displayed.
10. Extract and report the exact error message.
11. Take a screenshot after the error message appears and save it under ./screenshots/.

Documentation Requirements:
- Record every Playwright MCP tool that was used during execution.
- For each tool, include:
  - Tool name
  - Purpose
  - Input provided
  - Output/result
- Save this documentation as:
  ./tools/mcp-tools-used.md

Finally, provide a test execution summary containing:
- URL visited
- Random email used
- Random password used
- Error message displayed
- Screenshot path
- List of MCP tools used
- Overall result (Pass/Fail)