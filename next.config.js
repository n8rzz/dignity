require('dotenv').config();

const webpack = require('webpack');
const path = require('path');
const withStyles = require('@webdeb/next-styles');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

const webpackConfig = (config, options) => {
    const env = process.env.CLIENT_ENV || process.env.NODE_ENV;
    const nodeEnv = Object.keys(process.env).reduce((sum, curr) => {
        sum[`process.env.${curr}`] = JSON.stringify(process.env[curr]);

        return sum;
    }, {});

    config.plugins.push(new webpack.DefinePlugin(nodeEnv));

    config.resolve.alias['environment'] = path.join(__dirname, 'src', 'environments', env);
    config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
            loader: 'url-loader',
            options: {
                limit: 100000,
            },
        },
    });

    return config;
};

const withStylesConfig = {
    sass: true,
    modules: true,
};

const nextConfig = {
    ...withStylesConfig,
    webpack: webpackConfig,
};

module.exports = {
    ...withBundleAnalyzer(withStyles(nextConfig)),
};





// module.exports = {
//     webpack: config => {
//         const env = Object.keys(process.env).reduce((acc, curr) => {
//             acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);

//             return acc;
//         }, {});

//         config.plugins.push(new webpack.DefinePlugin(env));

//         return config;
//     }
// };
