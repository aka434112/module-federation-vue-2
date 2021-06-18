const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const { ModuleFederationPlugin } = webpack.container;
const { VueLoaderPlugin } = require('vue-loader')
const path = require("path");
let shared_dependencies = require("./package.json").dependencies;

const CATALOG_APP_URL = 'https://adoring-poincare-02d23f.netlify.app';
const CART_APP_URL = 'https://elastic-liskov-de33d7.netlify.app';

for(let dependency in shared_dependencies) {
    shared_dependencies[dependency] = { 
        singleton: true, 
        strictVersion: true, 
        requiredVersion: shared_dependencies[dependency], 
        eager: true 
    }
}

module.exports = (env, argv) => ({   
    output: {
        publicPath: argv.mode === 'production' 
                        ? '/'
                        : 'http://localhost:7000/',
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
        port: 7000,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers":
                "X-Requested-With, content-type, Authorization",
        },
        historyApiFallback: true
    },

    externals: ["vue", "vue-router", "vuex"],

    experiments: {
        topLevelAwait: true
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
            {
                test: /\.(js|mjs|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: ['@babel/plugin-syntax-top-level-await'],
                    }
                }    
            }          
        ],
    },

    plugins: [
        new VueLoaderPlugin(),
        // new ModuleFederationPlugin({
        //     name: "dashboard",
        //     filename: "remoteEntry.js",
        //     remotes: {
        //         catalog: `catalog@${
        //             argv.mode === 'development' 
        //                 ? 'http://localhost:7001/' 
        //                 : CATALOG_APP_URL
        //             }/remoteEntry.js`,
        //         cart: `cart@${
        //             argv.mode === 'development' 
        //                 ? 'http://localhost:7002/' 
        //                 : CART_APP_URL
        //             }/remoteEntry.js`, 
        //     },
        //     exposes: {},
        //     // shared: shared_dependencies,
        // }),
        new HtmlWebPackPlugin({
            template: "./index.html",
        }),       
    ],
});