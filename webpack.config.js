const { EnvironmentPlugin } = require('webpack')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanCSSPlugin = require('less-plugin-clean-css')
const path = require('path')

module.exports = (env, args) => {
  let production = false

  if (args && args.mode === 'production') {
    production = true
    console.log('== Production mode')
  } else {
    console.log('== Development mode')
  }

  const lessLoader = production
    ? {
        loader: 'less-loader',
        options: {
          plugins: [new CleanCSSPlugin({ advanced: true })],
        },
      }
    : {
        loader: 'less-loader',
      }

  return {
    entry: {
      'scripts/main': './src/bootstrap.tsx',
    },
    output: {
      path: path.resolve('./dist'),
    },
    target: 'web',
    devtool: production ? false : 'source-map',
    optimization: {
      splitChunks: {
        // always create vendor.js
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'scripts/vendor',
            chunks: 'initial',
            enforce: true,
          },
        },
      },
    },
    resolve: {
      alias: {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      },
      extensions: ['.ts', '.tsx', '.js', '.html', '.txt'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            'babel-loader',
            {
              loader: 'linaria/loader',
              options: {
                sourceMap: !production,
              },
            },
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true,
              },
            },
          ],
        },
        // app main .less file
        {
          test: /app\.less$/i,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: !production,
              },
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: !production,
              },
            },
            lessLoader,
          ],
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: !production,
              },
            },
            {
              loader: 'css-loader',
              options: { sourceMap: !production },
            },
          ],
        },
      ],
    },
    devServer: {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      contentBase: './dist',
      compress: true,
      port: 3030,
    },
    plugins: [
      new ForkTsCheckerWebpackPlugin(),
      new CopyWebpackPlugin([
        // static files to the site root folder (index and robots)
        {
          from: './src/static/**/*',
          to: path.resolve('./dist/'),
          toType: 'dir',
          flatten: true,
        },
      ]),
      new EnvironmentPlugin(['isExt']),
      new MiniCssExtractPlugin({
        filename: 'styles/styles.css',
      }),
    ],
  }
}
