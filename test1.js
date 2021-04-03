var http=require("http");
var server= http.createServer(function(request,response)
{
if(request.url=="/")
{
response.writeHead(200,{"Content-Type":"text/html"});
response.write("<h1>Hello World</h1>");
response.end("<html><body><h3>This is home Page! URL was:"+request.url+"</h3></body></html>");
}
else if(request.url=="/student")
{
response.writeHead(200,{"Content-Type":"text/html"});

response.write("<h1>Hello World</h1>");
response.end("<html><body><h3>This is Student Page! URL was:"+request.url+"</h3></body></html>");
}
else if(request.url=="/admin")
{
response.writeHead(200,{"Content-Type":"text/html"});
response.write("<h1>Hello World</h1>");
response.end("<html> <body> <h3>This is admin Page! URL was:node"+request.url+"</h3></body></html>");
}
else
{
response.end("Invalid Request");
}
});
server.listen(3000);
console.log("Server running");