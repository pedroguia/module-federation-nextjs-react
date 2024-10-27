const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const dependencies = require('./package.json').dependencies;

module.exports = {
  compiler: {
    styledComponents: true,
  },
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'test',
          filename: 'static/chunks/remoteEntry.js',
          exposes: {
            './App': './pages/index',
          },
          shared: dependencies,
        })
      );
    }

    return config;
  },
};
