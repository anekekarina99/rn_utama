module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@constants': './src/constant',
          '@hooks': './src/hooks',
          '@api': './src/api',
          '@redux': './src/redux',
          '@zustand': './src/zustand',
          '@services': './src/services',
          '@features': './src/features',
          '@helpers': './src/helpers',
        },
      },
    ],
    [
      'react-native-reanimated/plugin',
      {
        relativeSourceLocation: true,
      },
    ],
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
};
