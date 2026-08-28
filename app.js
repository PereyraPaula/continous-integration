const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const variable = 'Works on my machine.';
    res.send(variable);
});

module.exports = app;
