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
const path = require("path");
const server = http.createServer();

server.on("request", (req, res) => {
  // Any request to the server will trigger this callback
  const filePath = path.join(__dirname, "big.file");
  console.log(filePath);
  const readableStream = fs.createReadStream(filePath);
  readableStream.on("data", (chunk) => {
    console.log(`Received ${chunk.length} bytes of data.`);
  });
  readableStream.on("end", () => {
    console.log("Finished reading file.");
  });
  readableStream.pipe(res);
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
