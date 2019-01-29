module.exports = function(api) {
    api.cache(true);
    return {
        plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-proposal-private-methods'],
        presets: [
            [
                '@babel/env',
                {
                    targets: {
                        browsers: ['>0.25%', 'ie >= 11'],
                    },
                },
            ],
        ],
    };
};
