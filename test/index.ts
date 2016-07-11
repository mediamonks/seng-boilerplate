// require all test files
const testsContext = require.context(
	'./',
	true,
	/Spec\.ts/
);

testsContext.keys().forEach(testsContext);

// require all source files
const sourcesContext = require.context(
	'../src/',
	true,
	/\.ts$/
);

sourcesContext.keys().forEach(sourcesContext);
