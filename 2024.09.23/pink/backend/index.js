const express = require('express')
const cors = require("cors");
const app = express()
const port = 8080


app.use(cors());

const catsRoutes = require("./routes/cats.routes");
app.use(express.json());
app.use("/cats", catsRoutes);

const exampleRoutes = require("./routes/example.routes");
app.use(express.json());
app.use("/example", exampleRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })