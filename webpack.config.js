const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: ['./main.ts'],
    plugins: [
        new VueLoaderPlugin(),
    ],
    resolve: {
        extensions: ['.ts', '.vue',],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            },
            {
                test: /\.vue.ts$/,
                exclude: /node_modules/,
                enforce: 'pre',
                use: [
                    {
                        loader: 'vue-tslint-loader',
                        options: { /* Loader options go here */ }
                    }
                ]
            },
            {
                exclude: /node_modules/,
                test: /\.vue$/,
                loader: 'vue-loader',
            },
        ],
    },
}
