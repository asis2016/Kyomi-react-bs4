const proxy = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
        proxy('/.netlify/functions/', {
            target: 'https://amaharjan.com/',
            pathRewrite: {
                '^/\\.netlify/functions': '',
            },
        }),
    );
};