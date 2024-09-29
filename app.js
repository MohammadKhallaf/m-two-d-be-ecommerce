// entry point
// express -> server ( request | response )

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log(req);

  res.json({
    message: "Hello World!",
  });
  // .json({})
  // .status(XXX)
});

app.listen(3000, () => {
  console.log(`Example app listening on port 3000`);
});
