const { merge } = require("webpack-merge");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const commonConfig = require("./webpack.common");
const ModeulFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../package.json");

const devConfig = {
  mode: "development",
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: "index.html",
    },
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModeulFederationPlugin({
      name: "marketing",
      filename: "remoteEntry.js",
      exposes: {
        "./MarketingApp": "./src/bootstrap",
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
