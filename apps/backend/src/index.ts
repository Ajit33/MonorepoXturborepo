import express from "express"

const app=express()

app.get("/",(req,res)=>{
  res.status(200).json({
    message:"hello turbo !"
  })
})

app.listen(5000,()=>{
    console.log("app is running in port 5000")
})
