const http = require('http')
const port = 3000

const requestHandler = (request, response) => {
  var headers = request.headers;
  var method = request.method;
  var url = request.url;
  var body = [];
  request.on('error', function(err) {
    console.error(err);
  }).on('data', function(chunk) {
    body.push(chunk);
  }).on('end', function() {
    body = Buffer.concat(body).toString();
  });
  console.log(url);
  response.on('error', function(err) {
    console.error(err);
  });

  response.statusCode = 200;
  response.setHeader('Content-Type', 'application/json');
  // Note: the 2 lines above could be replaced with this next one:
  // response.writeHead(200, {'Content-Type': 'application/json'})

  var responseBody = {
    headers: headers,
    method: method,
    url: url,
    body: body
  };

  response.write(JSON.stringify(responseBody));
  response.end();
  // Note: the 2 lines above could be replaced with this next one:
  // response.end(JSON.stringify(responseBody))
}

const server = http.createServer(requestHandler)

server.on('error',err=>console.log(err))

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${port}`)
})
