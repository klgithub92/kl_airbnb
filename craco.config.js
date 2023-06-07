/* craco.config.js */
const CracoLessPlugin = require("craco-less")
const path = require("path")

const resolve = pathname => path.resolve(__dirname, pathname)

module.exports = {
  // less
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {},
            javascriptEnabled: true,
          },
        },
      },
    }
  ],
  webpack: {
    // 别名
    alias: {
      "@": resolve("src"),
      "components": resolve("src/components")
    }
  }
};