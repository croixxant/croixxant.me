const withPWA = require('next-pwa')
// Next.js doesn't yet support ESM. https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
const withTM = require('next-transpile-modules')(['hastscript', 'unist-util-visit', 'unist-util-visit-parents', 'hast-util-parse-selector'])
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA(
  withTM({
    webpack: (config, { isServer }) => {
      config.module.rules.push({
        test: /\.mdx?$/,
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
  })
)
