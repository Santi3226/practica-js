import express, { NextFunction, Request, Response } from 'express';
import { CharacterRepository } from './characterRepository.js';
import { randomUUID } from 'crypto';
import { Character } from './characterEntity.js';
const repository = new CharacterRepository;

function sanitizeCharacterInput(req: Request, res: Response, next: NextFunction)
{
  req.body.sanitizeCharacterInput = {
    name: req.body.name,
    characterClass: req.body.characterClass,
    level: req.body.level,
    hp: req.body.hp,
    mana: req.body.mana,
    attack: req.body.attack,
    items: req.body.items,
    id: req.body.id
  };
  Object.keys(req.body.sanitizeCharacterInput).forEach(key => 
  {
    if(req.body.sanitizeCharacterInput[key] === undefined) delete req.body.sanitizeCharacterInput[key] //Si falta algun campo lo deja como estaba
  }
  )
  // Aqui van todos los chequeos de seg y datos
  next();
}

// Get all characters
function findAll(req:Request, res:Response)
{ 
res.json({data: repository.findAll()});
}

//Get one character
function findOne(req:Request, res:Response)
{
  const character = repository.findOne({id:req.params.id});
  if (!character) {
    res.status(404).send({ error: 'Character not found' });
    return; //Asegurar q la ejecucion termine aca
  }
  res.json({data: character});
}

function deleteOne(req:Request, res:Response)
{
  const character = repository.delete({id:req.params.id});
  if (!character) {
    res.status(404).send({ error: 'Character not found' });
    return;
  }
  res.status(201).send({message:"Personaje eliminado", data: character});
}

function add(req:Request, res:Response) //?
{
  const { name, characterClass, level, hp, mana, attack, items, id} = req.body.sanitizeCharacterInput; //body es el contenido del post, se le define el scope para evitar errores
  const newCharacter = new Character(name, characterClass, level, hp, mana, attack, items, id); //lo crea
  newCharacter.id = randomUUID();
  repository.add(newCharacter);
  res.status(201).send({message:"Personaje creado", data: newCharacter});
}

function update(req:Request, res:Response)
{
  req.body.sanitizeCharacterInput.id = req.params.id;
  const character = repository.update(req.body.sanitizeCharacterInput);
  if (!character) {
    res.status(404).send({ error: 'Character not found' });
    return;
  }
  res.send({ message: "Personaje actualizado", data: character });
}

export{sanitizeCharacterInput, findAll, findOne, deleteOne, add, update}