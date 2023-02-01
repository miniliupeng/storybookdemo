const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite'
  },
  features: {
    storyStoreV7: true
  },
  async viteFinal(config, { configType: env }) {
    // customize the Vite config here
    const customConfig = {
      css: {
        preprocessorOptions: {
          less: {
            javascriptEnabled: true,
            // modifyVars: theme
          }
        }
      },
      resolve: {
        alias: {
          '~': path.resolve('src/modules'),
          '@': path.resolve('src'),
        }
      }
    }
    // return the customized config
    return { ...config, ...customConfig }
  }
}
