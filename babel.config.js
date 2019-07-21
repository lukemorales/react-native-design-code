module.exports = function(api) {
  api.cache(true);
  return {
    plugins: [
      [
        'module-resolver',
        {
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.android.js', '.android.tsx', '.ios.js', '.ios.tsx'],
          root: ['./'],
          alias: {
            '~': './src',
            '@components': './src/components',
            '@screens': './src/screens',
            '@stores': './src/stores',
            '@services': './src/services',
            '@assets': './src/assets',
          },
        },
      ],
    ],
    presets: ['babel-preset-expo'],
  };
};
