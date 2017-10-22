const webpack = require("webpack");
const webpackDevServer = require('webpack-dev-server');
const path = require('path');
const baseConfig = require('../config/webpack.config.dist');

const port = 8085;
const serverURI = `webpack-dev-server/client?http://localhost:${port}/`;

const webpackConfig = baseConfig;
webpackConfig.output.libraryTarget = "var";
webpackConfig.output.filename = "./dist/seng-boilerplate.js";
webpackConfig.output.path = path.join(__dirname, '../dist');
webpackConfig.entry = [serverURI, webpackConfig.entry];
webpackConfig.devtool = 'source-map';
webpackConfig.watch = true;

const compiler = webpack(webpackConfig);
const server = new webpackDevServer(compiler, {
	contentBase: path.resolve(__dirname, '../example'),
	open: true,
	stats: {
		colors: true,
		chunks: false,
	},
});

server.listen(port, function(err) {
	if (err) {
		console.log(err);
		return
	}
	console.log(`Listening at http://localhost:${port}\n`);
});
