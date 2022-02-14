const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

const api1 = require("./routes/api-1");
const api2 = require("./routes/api-2");

app.use(cors());
app.use("/api/api1", api1);
app.use("/api/api2", api2);
  
app.listen(port, () => console.log(`Listening on port ${port}`));