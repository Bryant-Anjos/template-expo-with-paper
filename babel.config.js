const path = require('path')

module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
    plugins: [
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
        },
      ],
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          extensions: [
            '.ts',
            '.tsx',
            '.ios.tsx',
            '.android.tsx',
            '.web.tsx',
            '.json',
          ],
          alias: {
            '@assets': path.join(__dirname, 'src', 'assets'),
            '@components': path.join(__dirname, 'src', 'components'),
            '@config': path.join(__dirname, 'src', 'config'),
            '@constants': path.join(__dirname, 'src', 'constants'),
            '@contexts': path.join(__dirname, 'src', 'contexts'),
            '@hooks': path.join(__dirname, 'src', 'hooks'),
            '@lang': path.join(__dirname, 'src', 'lang'),
            '@routes': path.join(__dirname, 'src', 'routes'),
            '@screens': path.join(__dirname, 'src', 'screens'),
            '@server': path.join(__dirname, 'src', 'server'),
            '@services': path.join(__dirname, 'src', 'services'),
            '@store': path.join(__dirname, 'src', 'store'),
            '@theme': path.join(__dirname, 'src', 'theme'),
            '@utils': path.join(__dirname, 'src', 'utils'),
          },
        },
      ],
    ],
  }
}
