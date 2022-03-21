const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req);
  if (req.url === "/") {
    res.end("welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("here is out short history");
  }
  res.end(
    `<h1>oops</h1>
    <p>We cant seem to find the page your are requested</p>
    <a href='/'>back home</a>`
  );
  //parameters are requests and response
});
server.listen(5000);
