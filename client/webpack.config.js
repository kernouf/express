const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const PRODUCTION = false;

module.exports = {
	entry: './src/main.js',
	mode: PRODUCTION ? 'production' : 'development',

	output: {
		path: path.resolve(
			__dirname,
			PRODUCTION ? '../server/public' : '../server/public'
		),
		filename: 'scripts/bundle.js',
	},
	devServer: {
		static: {
			publicPath: path.resolve(__dirname, 'dist'),
			watch: true,
		},
		host: 'localhost',
		port: 8888,
		open: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html',
			filename: './index.html',
		}),
		new CopyPlugin({
			patterns: [
				{
					from: 'images/*',
					to: 'images/[name][ext]',
				},
				{
					from: 'style/*',
					to: 'style/[name][ext]',
				},
				{
					from: 'scripts/*',
					to: 'scripts/[name][ext]',
				},
			],
		}),
	],
};
