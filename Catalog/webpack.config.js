const HtmlWebPackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const { VueLoaderPlugin } = require('vue-loader')
const path = require("path");

module.exports = (env, argv) => ({   
        entry: {
            main: './src/index.js',
            // catalog: './set-public-path.js',
        },

        output: {
            publicPath: argv.mode === 'production' 
                            ? '/catalog/' 
                            : 'http://localhost:7001/',
            libraryTarget: 'system',
            clean: true,                
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

        externals: ["vue", "vue-router", "vuex", "/^@vue-mf\/.+/"],

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
            // new ModuleFederationPlugin({
            //     name: "catalog",
            //     filename: "remoteEntry.js",
            //     remotes: {},
            //     exposes: {
            //         "./products": "./src/components/products/products.vue",
            //         "./state": "./src/store/state.js",
            //         "./actions": "./src/store/actions.js",
            //         "./mutations": "./src/store/mutations.js",
            //         "./getters": "./src/store/getters.js"
            //     },
            // }),
            new HtmlWebPackPlugin({
                template: "./index.html",
            }),
        ],
    });