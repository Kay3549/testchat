const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/ws',
    createProxyMiddleware({
      target: 'http://192.168.1.209:8080',
      changeOrigin: true,
    })
  );
};
