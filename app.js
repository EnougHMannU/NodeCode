const express = require("express");
const indexRouter = require('./Router/index')
const app = express();
const cors= require('cors');
const port = 8080;

app.use(cors())
app.use(express.json());

app.use("/",indexRouter);
app.listen(port, () => {
    console.log("Example app listening at http://localhost:" + port);
});
