# Initial test setup react app

Created with `pnpm create vite`

<br>

## Setup guide for react testing with `jest` and `react-testing-library`

<br>

### 1. Create basic app to test.

<br>

### 2. Test to vanilla javascript `getGreeting.js`.

<br>

* Install `jest` and `@types/jest`

    `pnpm add -D jest @types/jest`

<br>

* Add script `test`

    `"test": "jest --watchAll"`

<br>

* Run test

    ### **Error 1:**

    In `getGreeting.test.js`:

    `SyntaxError: Cannot use import statement outside a module`

    ### **Solution:**

    Configure Babel to support `ES6` in `Node`. Here we use `babel-jest` to perform the conversions. https://jestjs.io/docs/getting-started#using-babel

    Install `babel-jest` `@babel/core` `@babel/preset-env`:

    `pnpm add -D babel-jest @babel/core @babel/preset-env`

    And Configure Babel to target your current version of Node by creating a babel.config.js file in the root of your project.

    `babel.config.js`

    <br>

    ### **Error 2** (after re-run test):

    In `getGreeting.test.js`

    `You appear to be using a native ECMAScript module configuration file, which is only supported when running Babel asynchronously.`

    ### **Solution:**

    babel.config.cjs. `cjs` is what is applicable for Nodejs when using `"type"="module"`

    ### **Done!**

<br>

### 3. Test to react components.

<br>

* Run test (with empty test suite)

    `Information.test.js`

    ```javascript
    import Information from '../../src/components/Information';

    describe('Test in <Information />', () => {
        test('should render component', () => {
        })
    })
    ```

    ### **Error 1:**

    In `Information.jsx`:

    `SyntaxError: Support for the experimental syntax 'jsx' isn't currently enabled`

    ### **Solution:**

    Configure Babel to support react syntax (`jsx`) in `Node`.

    Install `@babel/preset-react`:

    `pnpm add -D @babel/preset-react`

    And add config to `babel.config.cjs`

    ### **Done!**

<br>

* To render component in testing, we will use `React Testing Library`

    Install `react-testing-library`:

    `pnpm add -D @testing-library/react`

<br>

* Re-run test (with component rendered)

    `Information.test.js`

    ```javascript
    import { render, screen } from "@testing-library/react";
    import Information from '../../src/components/Information';

    describe('Test in <Information />', () => {
        test('should render component', () => {
            render(<Information title='Hi!' name='Franz' />);
            screen.debug();
        })
    })
    ```

    ### **Error 1:**

    In `Information.jsx`:

    `The error below may be caused by using the wrong test environment, see see https://jestjs.io/docs/configuration#testenvironment-string. Consider using the "jsdom" test environment.`

    ### **Solution:**

    Create `jest.config.cjs` file in the root of your project.

    Install `jest-environment-jsdom`:

    `pnpm add -D jest-environment-jsdom`

    Add setup `testEnvironment` to `jest-environment-jsdom` in `jest.config.cjs`.

    ### **Done!**

<br>

### 4. For fetch api, we need configure following:

* Install `whatwg-fetch`;

    `pnpm add -D whatwg-fetch`

* Import `whatwg-polyfill` in a setup file provided in `jest.config.cjs`.

<br>

### Guide based in: https://gist.github.com/Klerith/ca7e57fae3c9ab92ad08baadc6c26177