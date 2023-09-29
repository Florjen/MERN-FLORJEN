const { createProxyMiddleware } = require('http-proxy-middleware');

const apiProxy = createProxyMiddleware('/api/workouts', { target: 'http://localhost:4000' });

module.exports = function(app) {
    app.use(apiProxy);
  };