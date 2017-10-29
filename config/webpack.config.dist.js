const webpack = require('webpack');
const path = require('path');

module.exports = {
	resolve: {
		extensions: ['.ts', '.js']
	},
	entry: path.resolve(__dirname, '../src/bundle.ts'),
	output: {
		/**
		 * in the case of a "plain global browser library", this will be used as the reference to our module that is
		 * hung off of the window object.
		 */
		library: 'SengBoilerplate'
	},
	module: {
		/**
		 * Note: Ignored files should not have calls to import, require, define or any other importing mechanism.
		 *
		 * This can cause issues when a outdated node package is used. In case of failing test/build remove the
		 * conflicting library from the noParse key.
		 */
		noParse: function (content) {
			return /lodash/.test(content);
		},
		rules: [
			{
				test: /\.ts$/,
				use: {
					loader: 'awesome-typescript-loader',
					options: {
						configFileName: path.resolve(__dirname, './tsconfig.webpack.json'),
					}
				},
				exclude: /node_modules/,
			}
		]
	},
	plugins: [],
	stats: {
		colors: true,
	},
};
