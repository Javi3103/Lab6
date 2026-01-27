const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Integracion ccontinuada funcionando');
});

app.listen(port, () => {
    console.log(`Servidor esta ejecutando en el puerto http://localhost:${port}`);
});