var http=require('http')
console.log('Server is running')
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    var datetime=new Date();
    res.write('Datetime: ' + datetime)
    res.end()
}).listen(8080)