const express = require('express');

const app = express();

app.use(express.static('/home/papi/DEV-TOOLS/FundaRegistration-Front-End/dist/funda-registration-front-end'));
app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: '/home/papi/DEV-TOOLS/FundaRegistration-Front-End/dist/funda-registration-front-end/'}),
);

app.listen(process.env.PORT || 8080);