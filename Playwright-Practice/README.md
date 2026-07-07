# 🚀 JavaScript, TypeScript & Playwright Practice Workspace

> A complete practice workspace to learn **JavaScript**, **TypeScript**, **Node.js**, and **Playwright** from scratch.

---

# 📖 Overview

This repository is designed as a personal learning workspace to practice and master:

* JavaScript Fundamentals
* TypeScript Fundamentals
* Node.js Basics
* Playwright UI Automation
* Playwright API Testing
* Modern Development Workflow
* VS Code Development Environment

The project starts with basic programming concepts and gradually progresses toward advanced Playwright automation.

---

# 🛠️ Prerequisites

Before starting, make sure the following software is installed on your system.

### 1. Node.js

Download and install the latest LTS version from:

https://nodejs.org/

Verify installation:

```bash
node -v
npm -v
```

---

### 2. Visual Studio Code

Download:

https://code.visualstudio.com/

---

### 3. Git (Optional but Recommended)

Download:

https://git-scm.com/

Verify installation:

```bash
git --version
```

---

# 📂 Project Setup

Create a new folder for your practice project.

```bash
mkdir Playwright-Practice
cd Playwright-Practice
```

Open the folder in VS Code.

```bash
code .
```

Your workspace is now ready.

---

# 1️⃣ Initialize a Node.js Project

Initialize the project using npm.

```bash
npm init -y
```

### What does this do?

This command creates a **package.json** file.

The `package.json` file stores:

* Project name
* Version
* Dependencies
* Development dependencies
* Scripts
* Metadata

Example:

```text
Playwright-Practice/
│
└── package.json
```

Think of **package.json** as the identity card of your project.

---

# 2️⃣ Install TypeScript

Install TypeScript as a development dependency.

```bash
npm install -D typescript
```

Initialize TypeScript configuration.

```bash
npx tsc --init
```

This generates:

```text
tsconfig.json
```

---

## What is TypeScript?

TypeScript is a superset of JavaScript developed by Microsoft.

It adds:

* Static typing
* Better IntelliSense
* Compile-time error checking
* Interfaces
* Enums
* Generics
* Improved maintainability

TypeScript code is compiled into JavaScript before execution.

---

# 3️⃣ Install Node.js Type Definitions

```bash
npm install -D @types/node
```

## Why is this needed?

Node.js APIs (such as `fs`, `path`, `http`, `process`, etc.) need type definitions so TypeScript understands them.

Without this package, you'll often see errors like:

```text
Cannot find name 'process'
Cannot find module 'fs'
```

Installing `@types/node` enables:

* Auto-completion
* Type checking
* Better IntelliSense
* Fewer compilation errors

---

# 4️⃣ Install Playwright

Run:

```bash
npm init playwright@latest
```

You'll be prompted with several setup questions.

Recommended choices:

```text
✔ Language?                     TypeScript
✔ Tests folder?                 tests
✔ GitHub Actions?               No
✔ Install Playwright browsers?  Yes
```

---

## What does Playwright install?

This command automatically installs:

* Playwright
* Playwright Test Runner
* Browser drivers
* Sample test
* Playwright configuration
* Browsers

Supported browsers include:

* Chromium
* Firefox
* WebKit

---

## Files Created

```text
playwright.config.ts
tests/
package.json
```

---

# 5️⃣ Install Playwright Browsers (If Needed)

If browser installation was skipped during setup, install them manually.

```bash
npx playwright install
```

This downloads:

* Chromium
* Firefox
* WebKit

These browsers are required to execute Playwright tests locally.

---

# 6️⃣ Verify the Installation

Run the sample tests.

```bash
npx playwright test
```

If everything is configured correctly:

* Browsers launch automatically.
* Sample tests execute.
* A report is generated.

If the tests pass, your Playwright environment is ready.

---

# 7️⃣ Recommended VS Code Extensions

Installing these extensions improves your development experience.

## Playwright Test for VS Code

Features:

* Run tests directly from the editor
* Debug tests
* View test status
* Explore test hierarchy

---

## ESLint

Helps identify:

* Coding mistakes
* Unused variables
* Syntax issues
* Best practice violations

---

## Prettier

Automatically formats code with consistent styling.

Benefits include:

* Cleaner code
* Consistent indentation
* Better readability

---

## Error Lens

Displays errors directly inline within your code, making them easier to spot without opening the Problems panel.

---

## GitLens

Enhances Git integration by showing:

* File history
* Line authorship (blame)
* Commit details
* Repository insights

---

## JavaScript and TypeScript Nightly (Optional)

Provides access to newer TypeScript language features before they are included in the stable VS Code release.

---

# 8️⃣ 📂 Actual Project Structure

```text
Playwright-Practice/
│
├── node_modules/
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── javascript/
│   │
│   ├── Basic/
│   │   ├── Basic_IO.js
│   │   └── FizzBuzz.js
│   │
│   ├── Patterns/
│   │   ├── Pyramid_Pattern.js
│   │   ├── RTStar_Pattern.js
│   │   └── left_pattern.js
│   │
│   └── strings/
│       └── Count Vowels and Consonants.js
│
├── typescript/               (coming soon)
│
├── playwright/               (coming soon)
│
├── tests/
│   └── example.spec.ts
│
├── playwright-report/
│
├── test-results/
│
├── package.json
├── package-lock.json
├── tsconfig.json
├── playwright.config.ts
└── README.md
```

---

# 9️⃣ 🧩 Programs Added So Far

### 📘 JavaScript Basics

| # | Program | File | What it does |
|---|---------|------|-------------|
| 1 | **Greeting Program** | `javascript/Basic/Basic_IO.js` | Takes a name as input and prints "Hello, [name]!" |
| 2 | **Multiplication Table** | `javascript/Basic/Basic_IO.js` | Prints the multiplication table (1–10) for a given number |
| 3 | **FizzBuzz** | `javascript/Basic/FizzBuzz.js` | Prints numbers 1 to n; multiples of 3 → "Fizz", 5 → "Buzz", both → "FizzBuzz" |

### ⭐ Star Pattern Programs

| # | Program | File | Pattern (Input: 3) |
|---|---------|------|-------------------|
| 4 | **Pyramid Pattern** | `javascript/Patterns/Pyramid_Pattern.js` | Centered pyramid with odd-numbered stars per row |
| 5 | **Right-Angle Triangle** | `javascript/Patterns/RTStar_Pattern.js` | Left-aligned triangle where row i has i stars |
| 6 | **Reverse Triangle** | `javascript/Patterns/left_pattern.js` | Descending triangle starting with n stars down to 1 |

### 🔤 String Programs

| # | Program | File | What it does |
|---|---------|------|-------------|
| 7 | **Count Vowels and Consonants** | `javascript/strings/Count Vowels and Consonants.js` | *(coming soon — file created, program pending)* |

---

### How the programs are organized

**javascript/Basic/** — Fundamental programming logic (IO, loops, conditionals)
**javascript/Patterns/** — Star pattern printing using nested loops
**javascript/strings/** — String manipulation exercises

---

# 🔟 Add Useful npm Scripts

Update the `scripts` section in `package.json`.

```json
"scripts": {
  "test": "playwright test",
  "headed": "playwright test --headed",
  "ui": "playwright test --ui",
  "debug": "playwright test --debug",
  "report": "playwright show-report"
}
```

### Usage

Run all tests:

```bash
npm test
```

Run with a visible browser:

```bash
npm run headed
```

Open the Playwright UI mode:

```bash
npm run ui
```

Run tests in debug mode:

```bash
npm run debug
```

Open the HTML report:

```bash
npm run report
```

---

# 1️⃣1️⃣ Useful TypeScript Commands

Compile all TypeScript files:

```bash
npx tsc
```

Compile a specific file:

```bash
npx tsc filename.ts
```

---

## Running TypeScript Without Compilation

Install `tsx`.

```bash
npm install -D tsx
```

Run a TypeScript file directly.

```bash
npx tsx filename.ts
```

Example:

```bash
npx tsx typescript/interfaces.ts
```

### Why use `tsx`?

Instead of compiling:

```text
TypeScript
     ↓
Compile
     ↓
JavaScript
     ↓
Execute
```

`tsx` lets you execute `.ts` files directly, making practice faster and more convenient.

---

# 1️⃣2️⃣ Install ESLint and Prettier

Install both tools as development dependencies.

```bash
npm install -D eslint prettier
```

## ESLint

ESLint analyzes your code to identify:

* Syntax errors
* Bad coding practices
* Unused variables
* Potential bugs

---

## Prettier

Prettier automatically formats code to maintain a consistent style across the project.

Benefits include:

* Uniform formatting
* Improved readability
* Easier collaboration
* Reduced formatting debates

---

# 1️⃣3️⃣ Final Installation Commands

Run the following commands in order to set up the entire workspace.

```bash
npm init -y

npm install -D typescript

npx tsc --init

npm install -D @types/node

npm init playwright@latest

npm install -D tsx

npm install -D eslint prettier
```

---

# 📚 Suggested Learning Roadmap

Follow this sequence to build a strong foundation.

### Phase 1 — JavaScript

* Variables
* Data Types
* Operators
* Strings
* Arrays
* Objects
* Functions
* Loops
* Scope
* Closures
* Promises
* Async/Await
* Error Handling

---

### Phase 2 — TypeScript

* Types
* Interfaces
* Type Aliases
* Classes
* Inheritance
* Enums
* Generics
* Utility Types
* Modules
* Decorators (optional)

---

### Phase 3 — Node.js

* Modules
* npm
* File System (`fs`)
* Path Module
* Events
* HTTP Module
* Environment Variables
* Package Management

---

### Phase 4 — Playwright

* Installation
* Test Runner
* Locators
* Assertions
* Fixtures
* Hooks
* Page Object Model (POM)
* API Testing
* Authentication
* Screenshots
* Videos
* Traces
* Parallel Execution
* Reporting

---

# 🎯 Goal

By completing the exercises in this repository, you will gain hands-on experience with:

* JavaScript programming
* TypeScript development
* Node.js fundamentals
* Playwright UI automation
* Playwright API testing
* Modern project structure
* npm package management
* Professional development workflows

This repository serves as a structured reference and long-term practice environment to strengthen both programming and test automation skills.
