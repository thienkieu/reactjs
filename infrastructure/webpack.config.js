const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const APP_DIR = path.resolve(path.dirname(__dirname));

module.exports = {
    entry: {
        app: APP_DIR + '/src/index.js',
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: APP_DIR + '/dist',
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
            inject: 'body',
            appMountId: 'app',
            hash: true,
            template: APP_DIR + '/src/core/index.html', //require('html-webpack-template'),
            filename: 'index.html',
            /*appMountHtmlSnippet: '<div class="app-spinner"><i class="fa fa-spinner fa-spin fa-5x" aria-hidden="true"></i></div>',
            headHtmlSnippet: '<style>div.app-spinner {position: fixed;top:50%;left:50%;}</style >',
            bodyHtmlSnippet: '<custom-element></custom-element>',*/
            baseHref: '/',

        }),
        new ExtractTextPlugin({
            filename: '[name].[chunkhash].bundle.css',
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
                    use: [
                        {
                            loader: 'typings-for-css-modules-loader',
                            options: {
                                modules: true,
                                namedExport: true
                            }
                        },
                    ]
                })  
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'typings-for-css-modules-loader',
                            options: {
                                modules: true,
                                namedExport: true
                            }
                        },
                        'sass-loader'
                    ]
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
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'],
                    plugins:[ 'transform-object-rest-spread']
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
        extensions: [".ts", ".tsx", ".js", ".scss",".css"],
        alias: {
            todoPackage: path.resolve(APP_DIR+'/packages/todoComponents'),
            store$: path.resolve(APP_DIR+'/src/core/store.js'),
            services: path.resolve(APP_DIR+'/packages/services'),
            themeProvider$: path.resolve(APP_DIR+'/packages/theme/ThemeProvider.js'),
            ui: path.resolve(APP_DIR+'/packages/ui'),
            libs: path.resolve(APP_DIR+'/packages/libs'),
            infrastructure: path.resolve(APP_DIR+'/infrastructure'),
            coreModule: path.resolve(APP_DIR+'/src/core'),
            userModule: path.resolve(APP_DIR+'/src/user'),
            themeModule: path.resolve(APP_DIR+'/src/themes')
        }
    }
};