const plugins = []
if (process.env.NODE_ENV === 'production') {
  plugins.push('transform-remove-console');
}
module.exports = {
	presets: [
		[
			'@vue/app',
			{
				useBuiltIns: 'entry',
				polyfills: [
					'es6.promise',
					'es6.symbol'
				]
			}
		]
	],
	plugins: plugins
}
