const { response } = require('express');
const express = require('express');
const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

app.listen(port, () =>{
    console.log("server listening on port :", port)
});
app.get("/status", (request, response) => {
    const status = {
        "status" : "running"
    };
    response.send(status);
});