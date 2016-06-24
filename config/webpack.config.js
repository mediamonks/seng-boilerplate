/*eslint-disable */
var webpack = require('webpack');
var path = require('path');

module.exports = function()
{
	return {
		resolve: {
			extensions: ['', '.js', '.ts']
		},
		// entry is the "main" source file we want to include/import
		entry: [
			'./src/index.ts'
		],
		// externals let you tell webpack about external dependencies
		// that shouldn't be resolved by webpack.
		externals: [
			{
				// We're not only telling webpack that lodash should be an
				// external dependency, but we're also specifying how
				// lodash should be loaded in different scenarios

				//lodash: {
				//	root: "_",
				//	commonjs: "lodash",
				//	commonjs2: "lodash",
				//	amd: "lodash"
				//}
			}
		],
		// output tells webpack where to put the bundle it creates
		output: {
			// in the case of a "plain global browser library", this
			// will be used as the reference to our module that is
			// hung off of the window object.
			library: "SengBoilerplate"
		},
		module: {
			loaders: [
				{
					test: /\.ts$/,
					exclude: /node_modules/,
					loader: 'ts'
				}
			]
		},
		plugins: [],
		stats: {
			colors: true
		}
	};
};
