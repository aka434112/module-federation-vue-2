const HtmlWebPackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const { VueLoaderPlugin } = require('vue-loader')
const path = require("path");

const CATALOG_APP_URL = 'https://adoring-poincare-02d23f.netlify.app';
const DASHBOARD_APP_URL = 'https://cranky-johnson-fb32bc.netlify.app/';

module.exports = (env, argv) => ({   
        entry: {
            main: './src/index.js',
            catalog: './set-public-path.js',
        },

        output: {
            publicPath: argv.mode === 'production' 
                            ? '/' 
                            : 'http://localhost:7002/',
        },

        resolve: {
            extensions: [".tsx", ".ts", ".vue", ".jsx", ".js", ".json"],
        },

        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js'
            }
        },  

        devServer: {
            contentBase: path.join(__dirname, "public"),
            port: 7002,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
                "Access-Control-Allow-Headers":
                    "X-Requested-With, content-type, Authorization",
            },
            historyApiFallback: true
        },

        module: {
            rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.css?$/,
                use: ["style-loader", "css-loader"],
            },      
            ],
        },

        plugins: [
            new VueLoaderPlugin(),
            new ModuleFederationPlugin({
                name: "cart",
                filename: "remoteEntry.js",
                remotes: {
                    catalog: `catalog@${
                        argv.mode === 'development' 
                            ? 'http://localhost:7001/' 
                            : CATALOG_APP_URL
                        }/remoteEntry.js`                      
                },
                exposes: {
                    "./cart-items": "./src/App.vue",
                },
            }),
            new HtmlWebPackPlugin({
                template: "./index.html",
            }),
        ],
    });