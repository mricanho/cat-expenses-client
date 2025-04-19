import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Updated to use ESM build of Vite's Node API
import { defineConfig } from 'vitest/config';

import { storybookTest } from '@storybook/experimental-addon-test/vitest-plugin';

const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/writing-tests/test-addon
export default defineConfig({
  test: {
    globals: true,
    setupFiles: './src/setupTests.ts',
    workspace: [
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/writing-tests/test-addon#storybooktest
          storybookTest({ configDir: path.join(dirname, '.storybook') }),
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            name: 'chromium',
            provider: 'playwright',
          },
          setupFiles: ['.storybook/vitest.setup.ts'],
        },
      },
      {
        extends: true,
        test: {
          environment: 'jsdom',
          name: 'vitest',
          globals: true,
          setupFiles: './src/setupTests.ts',
        },
      },
    ],
    browser: {
      instances: [
        {
          name: 'chromium',
          headless: true,
          browser: 'chromium',
        },
      ],
    },
  },
});
