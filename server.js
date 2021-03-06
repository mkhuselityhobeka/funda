const express = require('express');

const app = express();

app.use(express.static('./dist/funda-registration-front-end'));
app.get('/*', (req, res) =>
    res.sendFile('./app.component.html', {root: 'dist/funda-registration-front-end/'}),
    
);

app.listen(process.env.PORT || 8080);