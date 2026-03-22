import express, { NextFunction, Request, Response } from 'express';
import { characterRouter } from './character/characterRoutes.js';

const app = express();
app.use(express.json());

app.use('/api/characters',characterRouter) //Manda todas las peticiones q comiencen asi al router

app.use((_,res)=>{
  res.status(404).send({ error: 'Resource not found, check links' });
  return; //Si no entro en ninguna de las instucciones CRUD, que venga aca
})

app.listen(3000, () => {
  console.log("Server activo en http://localhost:3000/");
})