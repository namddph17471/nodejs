// Bước 1 ; include thư viên http
const http = require("http");
// Khỏi tạo server
const server = http.createServer((request,respon)=>{
    console.log(request.url);
});
//bước 3: lắng nghe cổng thực thi
const port = 3001;
server.listen(port,()=>{
    console.log(`server is running on ${port}`);
})