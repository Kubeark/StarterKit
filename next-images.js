//twopluszero/next-images/master/index.js

module.exports = ({ dynamicAssetPrefix = false, ...nextConfig } = {}) => {
	return Object.assign({}, nextConfig, {
		webpack(config, options) {
			config.module.rules.push({
				test: (x) => x.endsWith('svg'),
				use: [
					{
						loader: require.resolve('next/dist/compiled/file-loader'),
						options: {
							esModule: nextConfig.esModule || false,
							name: 'static/media/[name].[hash].[ext]'
						}
					}
				]
			});

			return config;
		}
	});
};
