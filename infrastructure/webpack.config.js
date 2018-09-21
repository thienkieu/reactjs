const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
require("babel-polyfill");

const APP_DIR = path.resolve(path.dirname(__dirname));

module.exports = {
    entry: {
        app: APP_DIR + '/src/app.js',
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: APP_DIR + '/dist' 
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
            inject: false,
            appMountId: 'app',
            hash: true,
            template: require('html-webpack-template'),
            filename: 'index.html',
            appMountHtmlSnippet: '<div class="app-spinner"><i class="fa fa-spinner fa-spin fa-5x" aria-hidden="true"></i></div>',
            headHtmlSnippet: '<style>div.app-spinner {position: fixed;top:50%;left:50%;}</style >',
            bodyHtmlSnippet: '<custom-element></custom-element>',
            baseHref: '/',

        }),
        new ExtractTextPlugin({
            filename: '/css/[name].[chunkhash].bundle.css',
            disable: false,
            allChunks: true
        }),
        new CleanWebpackPlugin(['dist'],{
            root: APP_DIR,
            verbose: true,
            dry: false
        })
    ],
    output: {
        filename: '[name].[chunkhash].bundle.js',
        path: path.resolve(APP_DIR, 'dist')
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000,
                        name: '/images/[hash]-[name].[ext]'
                    }
                }]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '/fonts/[hash]-[name].[ext]'
                    }
                }]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_module/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.tsx?$/,
                use: [{
                    loader:   'ts-loader',
                    options: {
                        configFile: "infrastructure/tsconfig.json",
                    }
                }]
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        alias: {
            todoPackage: path.resolve(path.dirname(__dirname)+'/packages/todoComponents')
        }
    }
};