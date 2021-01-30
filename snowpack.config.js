// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  // exclude: [
  //   'node_modules/**/*',
  //   'sass/**/_*'
  // ],
  mount: {
    // js: '/',
    // sass: '/',
  },
  plugins: [
    '@snowpack/plugin-sass'
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    // out: 'dist',
    clean: true
  },
};
