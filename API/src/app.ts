import express from 'express';

const app = express();
app.use('/',(req,res)=>{
  res.send("Hola!");
})
app.listen(3000, ()=>{
  console.log("Server activo en http://localhost:3000/");
})