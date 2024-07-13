const express= require('express');
const app = express();
require('./conn/conn'); // This line is added to connect to the database
const auth = require("./routes/auth"); // This line is added to import the auth route
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/api/v1", auth); // This line is added to use the auth route
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});