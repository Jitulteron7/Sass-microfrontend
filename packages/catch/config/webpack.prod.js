const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const package = require("../package.json");

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/catchit/latest/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "catchit",
      filename: "remoteEntry.js",
      exposes: {
        "./CatchItApp": "./src/bootstrap",
      },
      shared: package.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
