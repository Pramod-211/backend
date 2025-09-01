const dotenv = require('dotenv')
const express = require('express');

const app = express();
const port = 4000;

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.get('/userName', (req, res) => {
    res.send("hello from  dddd pramd")
    // console.log(req)
})

// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
