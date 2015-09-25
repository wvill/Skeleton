module.exports = {
    context: __dirname + '/client',
    entry: __dirname + '/client/app/app.js',

    output: {
        filename: 'main.js',
        path: __dirname + '/client'
    },
    devtool: 'eval-source-map',
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel', includes: [__dirname + '/client/app'], exclude: /node_modules/ },
            { test:/\.html$/, loader: 'raw', exclude: /node_modules/ }
        ]
    }
};