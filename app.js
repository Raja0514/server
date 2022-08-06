const express=require('express')
const app=express();
app.get('/',(res,req)=>{

    res.json('Hello World')
})
app.listen(process.env.PORT||3000)