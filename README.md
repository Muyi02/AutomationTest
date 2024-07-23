# AutomationTest
This project contains a Playwright test that automates interactions with a sample shopping cart website. The test verifies that items added to the cart are visible.

Table of Contents
Prerequisites
Installation
Running the Test
Configuration
Troubleshooting
Contributing
License
Prerequisites
Before you can run the tests, ensure you have the following installed:

Node.js (version 14 or higher recommended)
npm (Node package manager, usually installed with Node.js)
Installation
Download the Repository:

Download the repository as a ZIP file from GitHub. Extract the contents to a directory on your machine.

Navigate to the Project Directory:

Open your terminal or command prompt and navigate to the directory where you extracted the project:

bash
Copy code
cd path/to/your-repo-name
Install Dependencies:

Install the required packages listed in package.json:

bash
Copy code
npm install
Install Playwright Browsers:

Playwright needs specific browser binaries. Install them with:

bash
Copy code
npx playwright install
Running the Test
To execute the test, use the following command in your terminal:

bash
Copy code
npx playwright test
By default, Playwright will look for test files in the tests directory or files ending with .spec.ts or .test.ts.

Configuration
The project includes a Playwright configuration file (playwright.config.ts). This file specifies settings such as the test directory and timeout configurations.

Example playwright.config.ts:

typescript
Copy code
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  expect: {
    timeout: 5000
  },
  reporter: [['html', { outputFolder: 'test-results' }]],
  use: {
    trace: 'on-first-retry',
    video: 'retain-on-failure'
  },
});
Troubleshooting
No Test Found: Ensure your test files are in the tests directory and have the .spec.ts or .test.ts extension. Verify that the testDir in playwright.config.ts is set correctly.

Module Not Found: If you see errors about missing modules, run npm install to ensure all dependencies are installed. If issues persist, try rm -rf node_modules package-lock.json and then npm install.

TypeScript Errors: Ensure your tsconfig.json is correctly configured to include type definitions:

json
Copy code
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "typeRoots": ["./node_modules/@types"]
  },
  "include": ["src/**/*.ts", "tests/**/*.ts"],
  "exclude": ["node_modules"]
}
Contributing
Contributions are welcome! If you have suggestions or improvements, please open an issue or submit a pull request.
