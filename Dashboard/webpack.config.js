const HtmlWebPackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const { VueLoaderPlugin } = require('vue-loader')
const path = require("path");
let shared_dependencies = require("./package.json").dependencies;

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
                        ? path.resolve(__dirname, './dist') 
                        : 'http://localhost:7000/',
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
            name: "dashboard",
            filename: "remoteEntry.js",
            remotes: {
                catalog: `catalog@${argv.mode === 'development' ? 'http://localhost:7001/' : 'https://adoring-poincare-02d23f.netlify.app'}/remoteEntry.js`,
            },
            exposes: {},
            shared: shared_dependencies,
        }),
        new HtmlWebPackPlugin({
            template: "./index.html",
        }),
    ],
});