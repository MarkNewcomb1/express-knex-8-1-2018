const express = require('express')
const app = express();
const port = 8080

app.get('/', (request, response, next) => {
    response.send('🔥')
})

app.listen(port, () => {
    console.log(`running on port ${port}`);
})