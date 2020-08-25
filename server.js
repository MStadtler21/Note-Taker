const express = require("express");


const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true }));
app.use(express.json());
app.use(express.static("public"));


require("/routes/api.js")(app);
require("/routes/html.js")(app);



app.listenerCount(PORT, () => console.log(`App listening 'http://localhost:${Port}'`));