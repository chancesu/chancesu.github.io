const path = require('path');
const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withImages = require('next-images');

module.exports = withPlugins([
  [
    withSass,
      {
        cssModules: false,
        cssLoaderOptions: {
          importLoaders: 1,
          localIdentName: '[local]___[hash:base64:5]'
        }
      }
  ],[
    withImages
  ],
  [
    withCSS,{
      url: false
    }
  ]
], {
  webpack: (config, options) => {
    // config.module.rules.push({
    //   test: /\.svg$/,
    //   issuer: {
    //     test: /\.(js|ts)x?$/,
    //   },
    //   use: ['@svgr/webpack'],
    // });
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@store': path.join(__dirname, 'Store'),
      '@config': path.join(__dirname, 'config'),
      '@components': path.join(__dirname, 'components'),
      '@style': path.join(__dirname, 'static/style'),
      '@images': path.join(__dirname, 'static/images'),
    }
    return {
      ...config
    }
  }
}
);

