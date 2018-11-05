const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const path = require('path');

const port = process.env.PORT || 3000;
const app = express();

app.use('/build', express.static(path.resolve(__dirname, './build')));

if (process.env.NODE_ENV === 'development') {
    const config = require('./webpack.config');
    const compiler = webpack(config);

    console.log(process.env.NODE_ENV);

    app.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
    }));
    app.use(webpackHotMiddleware(compiler, {
        log: false,
        path: '/__webpack_hmr',
        heartbeat: 2000,
    }));
} else {
    app.use(express.static(path.join(__dirname, '/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(`${__dirname}/build/index.html`));
    });
}

app.get('/', (req, res) => {
    res.sendFile('index.html', {
        root: path.join(__dirname, 'src'),
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));