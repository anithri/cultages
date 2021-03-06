module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-flexbugs-fixes'),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009',
      },
      features: {
        customProperties: {
          strict: false,
          preserve: true,
        },
      },
      stage: 0,
    }),
  ],
}
