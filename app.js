const http = require('http');
const server=http.createServer((req,res)=>{
    console.log("Pintu Gouda")
    res.end("Pintu Gouda")
});
 
server.listen(3000,()=>{
    console.log("server is running on port 3000")
})
