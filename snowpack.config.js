// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  exclude: [
    '**/node_modules/**/*',
    '**/README.md',
  ],
  mount: {
    "public": { url: "/", static: true },
    "src/sass": "/dist",
    "src/js": "/dist",
  },
  plugins: [
    '@snowpack/plugin-sass',
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  optimize: {
    // bundle: true,
    minify: true,
    // target: 'es2016',
  }
};
