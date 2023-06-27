
    const http =require ('http')
    const fs = require ('fs')
    const server=http.createServer((req,res)=>{
        let fileName = + new Date()
        res.writeHead(200,{"Content-Type":"text/html"})
        fs.writeFile(`${fileName}.txt`, `${new Date()}`,'utf-8',()=>{
            fs.readFile(`${fileName}.txt`,'utf-8',(error,data)=>{
                if (error)
                    console.log(error);
               else 
                   
               res.end(data)
                   
            })
        })
        

   })

   server.listen(8000,()=>console.log("Server is listening 8000"))