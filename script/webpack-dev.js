const webpack = require("webpack");
const webpackDevServer = require('webpack-dev-server');
const path = require('path');
const baseConfig = require('../config/webpack.config.dist');

const port = 8080;
const serverURI = `webpack-dev-server/client?http://localhost:${port}/`;

let browser = baseConfig();
browser.output.libraryTarget = "var";
browser.output.filename = "./dist/seng-boilerplate.js";
browser.output.path = path.join(__dirname, '../dist');
browser.entry = [serverURI, browser.entry];

browser.devtool = 'source-map';
browser.watch = true;
browser.progress = true;
browser.keepalive = true;

const compiler = webpack(browser);
const server = new webpackDevServer(compiler, {
	contentBase: "example/"
});

server.listen(port, function(err) {
	if (err) {
		console.log(err);
		return
	}
	console.log(`Listening at http://localhost:${port}\n`);
});
