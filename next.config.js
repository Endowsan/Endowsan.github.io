module.exports = {
    basePath: process.env.GITHUB_ACTIONS ? "/hoge.com" : "",
    trailingSlash: true,
    assetPrefix: '/',
  };