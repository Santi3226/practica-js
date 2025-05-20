import express, { NextFunction, Request, Response } from 'express';
import { Character } from './character.js';
import { randomUUID } from 'crypto';

const app = express();
app.use(express.json());

const characters: Character[] = [
  new Character("Link", "Warrior", 100, 100, 100, 50, ["Master Sword", "Red Robe"], randomUUID()),
  new Character("Zelda", "Mage", 50, 50, 50, 25, ["Wisdom Staff", "Princess Cloth"], randomUUID()),
  new Character("Ganon", "Beast", 150, 100, 50, 75, ["Sword", "Gerudo Shield"], randomUUID()),
];

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


app.get('/api/characters', (req, res) => { // Get all characters
  res.json(characters);
})

app.get('/api/characters/:id', (req, res) => { // Get one character by ID
  const character = characters.find(c => c.id === (req.params.id));
  if (!character) {
    res.status(404).send({ error: 'Character not found' });
  }
  res.json(character);
})

app.delete('/api/characters/:id', (req, res) => { // Get one character by ID
  const character = characters.findIndex(c => c.id === (req.params.id));
  if (character===-1) {
    res.status(404).send({ error: 'Character not found' });
  }
  res.status(201).send({message:"Personaje eliminado", data: characters.splice(character,1)});
})

app.post('/api/characters', sanitizeCharacterInput, (req, res) => { // Create characters
  const { name, characterClass, level, hp, mana, attack, items, id} = req.body.sanitizeCharacterInput; //body es el contenido del post, se le define el scope para evitar errores
  const newCharacter = new Character(name, characterClass, level, hp, mana, attack, items, id); //lo crea
  newCharacter.id = randomUUID();
  characters.push(newCharacter); //lo añade al array
  res.status(201).send({message:"Personaje creado", data: newCharacter}); //devuelve el nuevo personaje, res status 201 significa que se ha creado correctamente
})

app.put('/api/characters/:id', sanitizeCharacterInput, (req, res) => { // Update characters por completo - no le encuentro mucho sentido, pero anda - el profe lo hizo buscando el index
  const character = characters.find(c => c.id === (req.params.id));
  if (!character) {
    res.status(404).send({ error: 'Character not found' });
    return;
  }
  Object.assign(character, req.body.sanitizeCharacterInput);
  res.send({ message: "Personaje actualizado", data: character });
})

app.patch('/api/characters/:id', sanitizeCharacterInput, (req, res) => { // Update characters solo algunos atb
  const character = characters.find(c => c.id === (req.params.id));
  if (!character) {
    res.status(404).send({ error: 'Character not found' });
    return;
  }
  Object.assign(character, req.body.sanitizeCharacterInput);
  res.send({ message: "Personaje actualizado", data: character });
})

app.listen(3000, () => {
  console.log("Server activo en http://localhost:3000/");
})