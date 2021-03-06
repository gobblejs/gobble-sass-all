var sass = require('node-sass');
var fs = require('fs');

module.exports = function sassAll(input, options) {
	options.data = input;
	options.sourceMap = 'foobar.map';

	var compiled = sass.renderSync(options);
	var out;

	if (options.omitSourceMapUrl) {
		out = {
			code: compiled.css.toString()
		};
	} else {
		out = {
			code: compiled.css.toString().replace('/*# sourceMappingURL=foobar.map */',''),
			map: compiled.map.toString()
		};
	}
	return out;
};

module.exports.defaults = {
	accept: [".sass", ".scss"],
	ext: ".css"
};
