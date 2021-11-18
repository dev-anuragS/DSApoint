const express = require('express');
const app = express();

app.get('/hello',(req,res)=>{
    res.send('hello world')
})

app.listen(8000,()=>{
    console.log('Server started at port 8000');
})