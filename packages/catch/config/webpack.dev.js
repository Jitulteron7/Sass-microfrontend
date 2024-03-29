const { merge } = require("webpack-merge");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const ModeulFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const devConfig = {
  mode: "development",
  output: {
    publicPath: "http://localhost:8085/",
  },
  devServer: {
    port: 8085,
    historyApiFallback: {
      index: "/index.html",
    },
  },

  plugins: [
    new ModeulFederationPlugin({
      name: "catchit",
      filename: "remoteEntry.js",
      exposes: {
        "./CatchItApp": "./src/bootstrap",
      },
      shared: packageJson.dependencies,
    }),
    new HTMLWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
