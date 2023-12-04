import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  framework: '@storybook/angular',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  staticDirs: ['../assets'],

  webpackFinal: async config => {
    config.module?.rules?.push({
      test: /\.(png|svg|jpg|gif)$/,
      use: ['file-loader'],
    });
    return config;
  },
};

export default config;
