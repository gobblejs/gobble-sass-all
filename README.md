# gobble-sass-all

Compile all SASS files with gobble.

## Installation

First, you need to have gobble installed - see the [gobble readme](https://github.com/gobblejs/gobble) for details. Then,

```bash
npm i -D gobble-sass-all
```

## Usage

```js
var gobble = require( 'gobble' );
module.exports = gobble( 'src/styles' ).transform( 'sass-all' );
```

That will transform all `*.sass` and `*.scss` files in `src/styles` into `*.css` files.

Optionally, specify a second argument to pass options to [node-sass](https://github.com/sass/node-sass), for example:

```js
var gobble = require( 'gobble' );
module.exports = gobble( 'src/styles' ).transform( 'sass-all', {
	indentedSyntax: true,
	precision: 3,
	sourceComments: true
});
```

To omit sourcemap generation, set the node-sass' option `omitSourceMapUrl` to `true`.

## License

MIT. Copyright 2015 Rich Harris

---

"THE BEER-WARE LICENSE":
<ivan@sanchezortega.es> wrote this file. As long as you retain this notice you
can do whatever you want with this stuff. If we meet some day, and you think
this stuff is worth it, you can buy me a beer in return.

---

