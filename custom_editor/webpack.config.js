const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'main.ts'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/i,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            appendTsSuffixTo: [
                                /\.vue/
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.(s?css|styl)$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'stylus-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass')
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2)$/i,
                use: {
                    loader: 'url-loader'
                }
            },
            {
                test: /\.vue$/i,
                use: [
                    {
                        loader: 'vue-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};
