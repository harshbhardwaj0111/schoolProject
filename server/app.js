const express=require('express');
const app=express();
const indexRouter=require('../server/router/home')
const cors=require('cors')

app.use(cors());
app.use(express.json())
app.use('/',indexRouter);

app.get('**',(req,res)=>{
    res.send("wrong :-)")
})

app.listen(6000,(err)=>{
  if(err)
    {
        console.log("Error"+err)
    }
    console.log("api listening on port no 6000")
})