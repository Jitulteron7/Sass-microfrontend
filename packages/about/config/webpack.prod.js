const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const package = require("../package.json");

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/about/latest/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "about",
      filename: "remoteEntry.js",
      exposes: {
        "./AboutApp": "./src/bootstrap",
      },
      shared: package.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
