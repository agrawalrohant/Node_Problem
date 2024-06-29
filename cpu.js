/* Problem Statement 2 :  */ 

const express = require("express");

const cors = require("cors");
const app = express();

function calculateFibonacci(n) {
  if (n <= 1) return n;
  return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
}

app.use(cors());
app.get("/fib", (req, res) => {
  const { num, requestNumber } = req.query;
  console.log(`Request number: ${requestNumber}`);
  const result = calculateFibonacci(Number(num));
  console.log(`Sending response for request number: ${requestNumber}`);
  res.status(200).json({
    message: result,
    status: "success",
  });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
