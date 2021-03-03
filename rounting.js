var http=require("http");
var fs=require('fs');
var server=http.createServer(function(req,res){
console.log("request"+req.url);
if(req.url==="/home"||req.url==="/")
res.writeHead(200,{"content-Tpye":"text/plain"});
fs.createReadStream(__dirname+'/hello.txt').pipe(res);
if(req.url==="/open"){
    res.writeHead(200,{"content-Tpye":"text/html"});
fs.createReadStream(__dirname1+'/openfile.html').pipe(res);
}

});
server.listen(3033,'127.0.0.1');
console.log("server running at 3033");