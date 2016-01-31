// require all test files
const testsContext = require.context('./', true, /Spec\.js$/);

testsContext.keys().forEach(testsContext);

// require all source files
const sourcesContext = require.context('../src/', true, /\.js$/);

sourcesContext.keys().forEach(sourcesContext);
