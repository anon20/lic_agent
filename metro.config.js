/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  resolver: {
    extraNodeModules:{
	components: `${__dirname}/src/components`,
	assets: `${__dirname}/src/assets`,
	APIs: `${__dirname}/src/APIs`,
	images: `${__dirname}/src/assets/images`,
	screens: `${__dirname}/src/screens`
    }
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};
