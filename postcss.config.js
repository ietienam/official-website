// it is handy to not have those transformations while we're developing
if (process.env.NODE_ENV === "production") {
  module.exports = {
    plugins: [
      require("autoprefixer"),
      require("cssnano"),
      // more postcss modules here if needed
    ]
  }
}
