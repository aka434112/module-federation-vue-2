const HtmlWebPackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const { VueLoaderPlugin } = require('vue-loader')
const path = require("path");

module.exports = (env, argv) => ({   
        entry: {
            main: './src/index.js',
            cart: './set-public-path.js',
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
                exposes: {
                    "./cart-items": "./src/App.vue",
                },
            }),
            new HtmlWebPackPlugin({
                template: "./index.html",
            }),
        ],
    });