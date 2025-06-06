import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    // "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    '@storybook/addon-actions',
    "@storybook/addon-essentials",
    "@storybook/experimental-addon-test",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    '@storybook/react-vite',
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  }
};
export default config;