const webpack = require('webpack');
const WebpackSystemRegister = require('webpack-system-register');
const Promise = require('es6-promise');
const _ = require('lodash');

const uglifyPluginSetting = new webpack.optimize.UglifyJsPlugin({
	sourceMap: false,
	mangle: false
});


const baseConfig = require('../config/webpack.config.dist');

const umd = _.cloneDeep(baseConfig);
umd.output.libraryTarget = 'umd';
umd.output.filename = './dist/seng-boilerplate-umd.js';

const umdMin = _.cloneDeep(baseConfig);
umdMin.output.libraryTarget = 'umd';
umdMin.output.filename = './dist/seng-boilerplate-umd.min.js';
umdMin.plugins = umdMin.plugins.concat(
	uglifyPluginSetting
);

const amd = _.cloneDeep(baseConfig);
delete amd.output.library;
amd.output.libraryTarget = 'amd';
amd.output.filename = './dist/seng-boilerplate-amd.js';

const cjs2 = _.cloneDeep(baseConfig);
delete cjs2.output.library;
cjs2.output.libraryTarget = 'commonjs2';
cjs2.output.filename = './dist/seng-boilerplate-commonjs.js';

const system = _.cloneDeep(baseConfig);
delete system.output.library;
system.plugins.push(
	// adds a systemjs wrapper around the normal webpack export
	new WebpackSystemRegister({
		systemjsDeps: [
		],
		registerName: 'seng-boilerplate', // optional name that SystemJS will know this bundle as.
	})
);
system.output.filename = './dist/seng-boilerplate-systemjs.js';

const browser = _.cloneDeep(baseConfig);
browser.output.libraryTarget = 'var';
browser.output.filename = './dist/seng-boilerplate.js';


const browserMin = _.cloneDeep(baseConfig);
browserMin.output.libraryTarget = 'var';
browserMin.output.filename = './dist/seng-boilerplate.min.js';
browserMin.plugins = browserMin.plugins.concat(
	uglifyPluginSetting
);

[umd, umdMin, amd, cjs2, browser, browserMin, system].reduce(function (prev, config) {
	return prev.then(function() {
		return new Promise(function(resolve, reject) {
			webpack(config, function (err, stats) {
				if (err)
				{
					console.error('err', err);
					reject(err);
					return;
				}

				const jsonStats = stats.toJson();
				if (jsonStats.errors.length > 0)
				{
					console.error('stats error', jsonStats.errors);
					reject(err);
					return;
				}
				if (jsonStats.warnings.length > 0)
				{
					console.warn('warn', jsonStats.warnings);
				}
				console.log('log', stats.toString());
				resolve();
			});
		});
	});
}, Promise.resolve());
