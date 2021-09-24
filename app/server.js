const express = require("express");
const router = require("../app/routers/root.router");
const app = express();
const port = 3000;



//Chuyển req, res về json để tiện thao tác
app.use(express.json());


app.use(router);

//setup sequelize
const {sequelize} = require("./model");
sequelize.sync({alter : true});

app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})