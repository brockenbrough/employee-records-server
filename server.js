const express = require("express");
const app = express();
const cors = require("cors");  // allows outside sites to hit the server without throwing cross-site errors.
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record")); // this pulls in code that defines what URL paths are code recognizes.
// get driver connection
const dbo = require("./db/conn");   

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);

  });
  console.log(`Server is running on port: ${port}`);
});
