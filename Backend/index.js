const express = require('express');
const app = express();

app.get('/home',(req,resp)=>{
    resp.send("this is done");
})
app.listen(5000)