const { merge } = require("webpack-merge");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const ModeulFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const devConfig = {
  mode: "development",
  output: {
    publicPath: "http://localhost:8084/",
  },
  devServer: {
    port: 8084,
    historyApiFallback: {
      index: "/index.html",
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },

  plugins: [
    new ModeulFederationPlugin({
      name: "about",
      filename: "remoteEntry.js",
      exposes: {
        "./AboutApp": "./src/bootstrap",
      },
      shared: packageJson.dependencies,
    }),
    new HTMLWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
