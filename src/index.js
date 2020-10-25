const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.status(200).send("Hello World");
});

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
