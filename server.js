const express = require('express');

const app = express();

app.use(express.static('./dist/funda-registration-front-end'));

app.use(function (req, res, next) {
    res.setHeader(
      'Content-Security-Policy-Report-Only',
      "default-src 'self'; font-src 'self'; img-src 'self'; script-src 'self'; style-src 'self' https://fonts.googleapis.com https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css; frame-src 'self';"
    );
    next();
  });

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/funda-registration-front-end/index.html'}),
);

app.listen(process.env.PORT || 8080);