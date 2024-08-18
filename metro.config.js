const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config')
const path = require('path')
const defaultConfig = getDefaultConfig(__dirname)
const { assetExts, sourceExts } = defaultConfig.resolver

const config = {
  resolver: {
    extraNodeModules: {
      assets: path.resolve(__dirname, './src/assets'),
      components: path.resolve(__dirname, './src/components'),
      constants: path.resolve(__dirname, './src/constants'),
      data: path.resolve(__dirname, './src/data'),
      hooks: path.resolve(__dirname, './src/hooks'),
      i18n: path.resolve(__dirname, './src/i18n'),
      navigation: path.resolve(__dirname, './src/navigation'),
      providers: path.resolve(__dirname, './src/providers'),
      screens: path.resolve(__dirname, './src/screens'),
      services: path.resolve(__dirname, './src/services'),
      store: path.resolve(__dirname, './src/store'),
      styles: path.resolve(__dirname, './src/styles'),
      theme: path.resolve(__dirname, './src/theme'),
      types: path.resolve(__dirname, './src/types'),
      utils: path.resolve(__dirname, './src/utils'),
    },
    // assetExts: assetExts.filter(ext => ext !== 'svg'),
    // sourceExts: [...sourceExts, 'svg'],
  },
  transformer: {
    // babelTransformerPath: require.resolve('react-native-svg-transformer'),
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
}

module.exports = mergeConfig(defaultConfig, config)
