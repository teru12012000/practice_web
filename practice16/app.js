const express=require('express')
const app=express()
const port=3001
app.use(express.json())

app.get('/booklog',(req,res)=>{
  res.json({
    "ok":"アクセス完了"
  })
})
app.post('/booklog',(req,res)=>{
  const booklog=req.body
  if(!(booklog.name&&booklog.text)){
    return res.json({
      "ok":false,
      "error":"invalid parmeter"
    })
  }


  res.json({
    "ok":true,
    "booklog":booklog
  })
})


app.listen(port,()=>{
  console.log("GO!!!")
})