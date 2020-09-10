const http = require('http');

//var APPINSIGHTS_INSTRUMENTATIONKEY= process.env.APPINSIGHTS_INSTRUMENTATIONKEY;

const server = http.createServer((request, response) => {
    var a,b,c;
    if(process.env.NODE_ENV === "production")
    {
        a= process.env.NODE_ENV ;
        b= process.env.APPINSIGHTS_INSTRUMENTATIONKEY;
        c= process.env.KEY_VALUE;
    }
    else if(process.env.NODE_ENV === "development")
    {
        a="Welcome";
        b="testparams";
        c="testvalue";
    }
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end(a+"  && "+b+"myCustomKey="+c);
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
