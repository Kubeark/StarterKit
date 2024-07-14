/** @type {import("next").NextConfig} */
const { version } = require('./package.json');
const withImages = require('next-images');
const ESLintPlugin = require('eslint-webpack-plugin');

const nextConfig = withImages({
	swcMinify: true,
	publicRuntimeConfig: {
		version,
		env: process.env.NODE_ENV
	},
	images: {
		disableStaticImages: true
	},
	async headers() {
		return [
			{
				source: '/:path*',
				headers: [
					{
						key: 'X-Frame-Options',
						value: 'SAMEORIGIN'
					},
					{
						key: 'X-DNS-Prefetch-Control',
						value: 'on'
					},
					{
						key: 'Content-Security-Policy',
						value: "default-src 'self'; base-uri 'self'; script-src 'self' 'unsafe-eval'; script-src-elem 'self' https://cdn.jsdelivr.net; style-src https://fonts.googleapis.com 'unsafe-inline' *; font-src 'self' https://fonts.gstatic.com https://cdn.jsdelivr.net; img-src 'self' blob: https://*.githubusercontent.com https://bitnami.com/ https://github.com/ data:; connect-src 'self'; child-src www.google.com; frame-ancestors 'none'; form-action 'self'; worker-src 'self' blob:;"
					},
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff'
					},
					{
						key: 'X-Powered-By',
						value: 'NONE'
					},
					{
						key: 'X-Xss-Protection',
						value: '1; mode=block'
					},
					{
						key: 'Strict-Transport-Security',
						value: 'max-age=31536000; includeSubDomains; preload'
					}
				]
			}
		];
	},
	webpack(config, { dev }) {
		if (dev) {
			// Add this plugin only in dev mode
			config.plugins.push(
				new ESLintPlugin({
					context: './', // Location where it will scan all the files
					extensions: ['js', 'jsx', 'ts', 'tsx'], // File formats that should be scanned
					exclude: ['node_modules', 'dist'] // Exclude everything in these folders
				})
			);
		}

		config.resolve.fallback = {
			...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
			// by next.js will be dropped. Doesn't make much sense, but how it is
			fs: false // the solution
		};
		config.module = {
			...config.module,
			exprContextCritical: false
		};

		return config;
	},
	transpilePackages: [
		'antd',
		'rc-util',
		'rc-table',
		'rc-tree',
		'rc-steps',
		'rc-pagination',
		'@ant-design/icons',
		'@ant-design/icons-svg'
	],
	reactStrictMode: true,
	compiler: {
		// Enables the styled-components SWC transform
		styledComponents: true
	}
});

module.exports = nextConfig;
