var _sass = require( 'node-sass' );

module.exports = function sassAll(input, options) {
	options.data = input;
	return _sass.renderSync(options).css;
};

module.exports.defaults = {
	accept: ".sass",
	ext: ".css"
};
