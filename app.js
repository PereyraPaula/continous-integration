const express = require('express');
const app = express();

app.get('/', (req, res) => {
    let variable = 'Works on my machine.'
    res.send(variable);
});

module.exports = app;
