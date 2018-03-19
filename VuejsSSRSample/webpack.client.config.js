const path = require('path');

module.exports = {
    entry: {
        main: path.join(__dirname, 'VueApp/client.js')
    },
    output: {
        path: path.join(__dirname, 'wwwroot/dist'),
        filename: 'bundle.client.js',
        publicPath: '/dist/'
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: __dirname,
                exclude: /node_modules/
            },
        ]
    },
};
