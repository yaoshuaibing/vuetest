// 这个是主角
const http = require("http")
const server = http.createServer((res,req) => {
   req.end('<div>123</div>')
})
server.listen(8000)