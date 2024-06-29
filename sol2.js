/* Problem Statement 2 Solution  */

const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const { fork } = require("child_process");

app.use(cors());
app.get("/fib", (req, res) => {
  const { num, requestNumber } = req.query;
  console.log(`Request number: ${requestNumber}`);

  const fiboResponse = fork(path.join(__dirname, "fiboWorker.js"));
  fiboResponse.send(parseInt(num, 10));
  fiboResponse.on("message", (result) => {
    console.log(`Sending response for request number: ${requestNumber}`);
    res.status(200).json({
      message: result,
      status: "success",
    });
    fiboResponse.kill();
  });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
