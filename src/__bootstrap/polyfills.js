/*eslint import/no-commonjs: 0, strict: 0*/
/* istanbul ignore next */
(() => {//iife for istanbul ignore next
	//add polyfills and shims
	// require('core-js');
	// require('regenerator-runtime/runtime');
	global.fetch = global.fetch || require('node-fetch');
})();
