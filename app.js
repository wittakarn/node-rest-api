const express = require('express');
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});

app.get('/hello', (request, response) => {
    const message = {
        'message': 'Hello world!'
    };

    response.send(message);
});