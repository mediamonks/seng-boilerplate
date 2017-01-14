/*eslint-disable */
var webpack = require('webpack');
var path = require('path');

module.exports = function()
{
	return {
		resolve: {
			extensions: ['', '.ts', '.js']
		},
		// entry is the "main" source file we want to include/import
		entry: './test/index.ts',

		module: {
			loaders: [
				/**
				 * Unlike ts-loader, awesome-typescript-loader doesn't allow to override TS compiler options
				 * in query params. We use separate `tsconfig.test.json` file, which only differs in one thing:
				 * inline source maps. They are used for code coverage report.
				 *
				 * See project repository for details / configuration reference:
				 * https://github.com/s-panferov/awesome-typescript-loader
				 */
				{
					test: /\.ts$/,
					exclude: /node_modules/,
					loader: 'awesome-typescript-loader',
					query: {
						tsconfig: 'config/tsconfig.test.json'
					}
				}
			],
			postLoaders: [
				/**
				 * Instruments TS source files for subsequent code coverage.
				 * See https://github.com/deepsweet/istanbul-instrumenter-loader
				 */
				{
					test: /\.ts$/,
					loader: 'istanbul-instrumenter-loader',
					exclude: [
						/node_modules/,
						/test/,
						/Spec\.ts$/
					]
				}
			]
		},
		// we use this instead of the devtool option, to force sourcemap generation for .ts files
		plugins: [
			new webpack.SourceMapDevToolPlugin({
				filename: null,
				test: /\.(t|j|cs)s($|\?)/i
			})
		]
	};
};
