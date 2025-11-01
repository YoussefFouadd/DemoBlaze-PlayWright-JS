# Project Title

[Demo Blaze](https://www.demoblaze..com)
Web automation testing project for DemoBlaze website using Playwright & Js with Page Object Model (POM) pattern.

## Built With

- [Java Script](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction) - The programming language used
- [Playwright](https://playwright.dev/) - The web 

## Page Object Model (POM)

The project follows the Page Object Model pattern:
- **POManager**: Central manager that provides access to all page objects
- **Page Objects**: Each page has its own class with methods for interactions
- **Test Folder**: includes all the testing scenarios and validations
- **Test data**: Externalized in `test-data.json` for easy maintenance

## Project Structure

```
demoBlazeProject/
│
├── .github/
│   └── workflows/
│       └── playwright.yml          # GitHub Actions CI/CD workflow
│
├── pages/                          # Page Object Model
│
├── tests/                          # Test scenarios
│
├── utils/                         
│   └── APIUtils.js                # API authentication
│
├── test-data.json                  # External test data
│
├── playwright.config.js            # Playwright configurations
│
├── package.json                    # Node.js dependencies
```

## Prerequisites

- [Node.js](https://nodejs.org/en/download)

- npm or [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## Running Tests

### Run full regression checks ( All tests on all browsers) 
```bash
npm run regression
```

### Run regression on chrome
```bash
npm run regression-chrome
```

### Run quick sanity checks (login & order) only on chrome
```bash
npm run sanity
```

## Viewing Reports

The framework provides two types of reporting to help with debugging. These reports include detailed test results along with screenshots and video recordings, making it easier to identify and understand test failures.
### 1.Playwright HTML Report
After running tests, view the HTML report:
```bash
npx playwright show-report
```

### 2.Allure Report
Generate and view Allure report:
```bash
npm run allure:serve
```
Then open the URL shown in the terminal (usually `http://localhost:XXXXX`)

## Test Execution Video Link

[Test Execution Video](https://drive.google.com/file/d/1Au571X0qKa9A1WN5LJE2oyDl78J-d8q2/view?usp=drive_link) - A video of test execution for all tests in the project

## Author

**Youssef Hassan**