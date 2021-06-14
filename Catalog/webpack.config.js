const HtmlWebPackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const { VueLoaderPlugin } = require('vue-loader')
const path = require("path");

const CART_APP_URL = 'https://elastic-liskov-de33d7.netlify.app';

module.exports = (env, argv) => ({   
        entry: {
            main: './src/index.js',
            catalog: './set-public-path.js',
        },

        output: {
            publicPath: argv.mode === 'production' 
                            ? '/' 
                            : 'http://localhost:7001/',
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
            port: 7001,
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
                name: "catalog",
                filename: "remoteEntry.js",
                remotes: {},
                exposes: {
                    "./products": "./src/components/products/products.vue",
                    "./store": "./src/store/index.js"
                },
            }),
            new HtmlWebPackPlugin({
                template: "./index.html",
            }),
        ],
    });