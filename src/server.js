const express = require ('express')
const app = express();

app.get('/hello',(req,res)=>{
    res.send('welcome!');
})

app.listen(3000,()=>{
    console.log('app listening');
})