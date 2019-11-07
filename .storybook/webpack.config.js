module.exports = ({ config }) => {
	config.module.rules.push({
		test: /\.(ts|tsx)$/,
		use: [
			{
				loader: 'awesome-typescript-loader',
			},
		],
	});

	config.resolve.extensions.push('.ts', '.tsx');
	config.stats = 'minimal';

	return config;
};
