const express = require('express')
const cors = require("cors");
const app = express();
const port = 8080;
app.use(cors());

const catsRoutes = require("./routes/cats.routes");
const todoRoutes = require("./routes/todo.routes"); 
const jwtRoutes = require("./routes/jwt.routes");
//const exampleRoutes = require("./routes/example.routes");

app.use(express.json());
app.use("/jwt", jwtRoutes);
app.use("/todo", todoRoutes);
app.use("/cats", catsRoutes);
//app.use("/example", exampleRoutes);
app.get('/', (req, res) => {
  res.send('Hello World Egle!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})