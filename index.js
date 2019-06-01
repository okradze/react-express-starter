const express = require('express');

const app = express();

app.get('/api/hello', (req, res) => {
    res.send({ message: 'Hello' });
});

app.listen(process.env.PORT);
