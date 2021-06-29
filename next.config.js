const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })

    // Fixes packages that depend on fs/module module
    if (!isServer) {
      config.resolve.fallback.fs = false
    }

    return config
  },
  env: {
    ASSETS_HOSTNAME: process.env.ASSETS_HOSTNAME,
  },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    runtimeCaching: [...runtimeCaching],
  },
  future: {
    webpack5: true,
  },
})
