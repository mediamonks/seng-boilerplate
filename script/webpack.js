var webpack = require("webpack");

var uglifyPluginSetting = new webpack.optimize.UglifyJsPlugin({
	sourceMap: false,
	mangle: false
});


var baseConfig = require('../config/webpack.config');

var umd = baseConfig();
umd.output.libraryTarget = "umd";
umd.output.filename = "./dist/umd/seng-boilerplate.js";

var umdMin = baseConfig();
umdMin.output.libraryTarget = "umd";
umdMin.output.filename = "./dist/umd/seng-boilerplate.min.js";
umdMin.plugins = umdMin.plugins.concat(
	uglifyPluginSetting
);


var amd = baseConfig();
delete amd.output.library;
amd.output.libraryTarget = "amd";
amd.output.filename = "./dist/amd/seng-boilerplate.js";

var amdMin = baseConfig();
delete amdMin.output.library;
amdMin.output.libraryTarget = "amd";
amdMin.output.filename = "./dist/amd/seng-boilerplate.min.js";
amdMin.plugins = amdMin.plugins.concat(
	uglifyPluginSetting
);


var cjs2 = baseConfig();
delete cjs2.output.library;
cjs2.output.libraryTarget = "commonjs2";
cjs2.output.filename = "./dist/commonjs2/seng-boilerplate.js";


var browser = baseConfig();
browser.output.libraryTarget = "var";
browser.output.filename = "./dist/browser/seng-boilerplate.js";


var browserMin = baseConfig();
browserMin.output.libraryTarget = "var";
browserMin.output.filename = "./dist/browser/seng-boilerplate.min.js";
browserMin.plugins = browserMin.plugins.concat(
	uglifyPluginSetting
);


[umd, umdMin, amd, amdMin, cjs2, browser, browserMin].forEach(function(config)
{
	// returns a Compiler instance
	webpack(config, function (err, stats)
	{
		if (err)
		{
			console.error(err);
			return;
		}

		var jsonStats = stats.toJson();
		if (jsonStats.errors.length > 0)
		{
			console.error(jsonStats.errors);
			return;
		}
		if (jsonStats.warnings.length > 0)
		{
			console.warn(jsonStats.warnings);
		}
		console.log(stats.toString());
	});
});

