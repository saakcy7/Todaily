const express= require('express');
const app = express();
require('./conn/conn'); // This line is added to connect to the database
app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});