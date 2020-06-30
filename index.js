const express = require('express');
const got = require('got');

const app = express();
const port = 8080;

app.get('/', async (req, res) => {
    try {
        const data = await got(`http://${process.env.COMPONENT_BACKEND_HOST}:${process.env.COMPONENT_BACKEND_PORT}`);
        res.send(`Pod name of backend ${data.name}`);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
