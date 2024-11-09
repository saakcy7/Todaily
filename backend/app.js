const express= require('express');
const app = express();
const cors = require('cors');
require('./conn/conn'); // This line is added to connect to the database
const auth = require("./routes/auth"); // This line is added to import the auth route
const list = require("./routes/list"); // This line is added to import the list route
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/api/v1", auth); // This line is added to use the auth route
app.use("/api/v2", list); // This line is added to use the list route
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server is running on port 5000');
});