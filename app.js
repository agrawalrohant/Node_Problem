/*
// Generate random content
const content = Math.random().toString(36).repeat(10000000);

// Write content to file
const fs = require("fs");
fs.writeFileSync("C:\\Rohant\\GitHub\\Node_Problem_1\\big.file", content);
console.log(__dirname);
*/
const http = require("http");
const fs = require("fs");

const server = http.createServer();

server.on("request", (req, res) => {
  // Any request to the server will trigger this callback
  fs.readFile("big.file", (err, data) => {
    if (err) throw err;
    res.end(data);
  });
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
