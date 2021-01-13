const http = require("http"); //Wiring

const server = http.createServer((req, res) => {
  console.log(`Hello!, thanx for visiting!! ${req.url}`);
  if (req.url !== "/") res.end("404");
  res.end("Okay bye!");
});

console.log("listening at http://localhost:3000");
server.listen(3000);
