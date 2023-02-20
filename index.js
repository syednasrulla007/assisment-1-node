const http = require("http")

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write("Hello World")
        // res.sendDate("<h1>Hello</h1>")
        res.end()
    }
    else if(req.method==='GET' && req.url==='/jsonobj'){
        res.write(JSON.stringify({name:"Pranit",id:"1"}))
        res.end();
    }
    else if(req.method==='GET' && req.url==='/jsonarr'){
        res.write(JSON.stringify([1,2,3,4,5]))
        res.end();
    }
})

server.listen(8080,()=>{
    console.log("App started on port 8080")
})

