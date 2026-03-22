import { Router } from "express";
import {sanitizeCharacterInput, findAll, findOne, deleteOne, add, update} from "./characterController.js";

const characterRouter = Router();
export {characterRouter}
characterRouter.get('/',findAll)
characterRouter.get('/:id',findOne)
characterRouter.delete('/:id',deleteOne)
characterRouter.post('/',sanitizeCharacterInput,add)
characterRouter.patch('/:id',sanitizeCharacterInput,update)
characterRouter.put('/:id',sanitizeCharacterInput,update)


