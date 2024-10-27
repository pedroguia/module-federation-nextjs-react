const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const dependencies = require('./package.json').dependencies;

module.exports = {
  compiler: {
    styledComponents: true,
  },
  webpack(config, options) {
    const { isServer } = options;

    if (!isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'host',
          remotes: {
            remote: 'remote@http://localhost:3001/remoteEntry.js',
            test: `test@http://localhost:3002/_next/static/${
              isServer ? 'ssr' : 'chunks'
            }/remoteEntry.js`,
          },
          filename: 'static/chunks/remoteEntry.js',
          shared: dependencies,
        })
      );
    }

    return config;
  },
};
