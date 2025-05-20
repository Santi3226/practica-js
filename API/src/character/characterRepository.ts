import { Respository } from "../shared/repository";
import { Character } from "./characterEntity.js";
import { randomUUID } from 'crypto';

const characters: Character[] = [
  new Character("Link", "Warrior", 100, 100, 100, 50, ["Master Sword", "Red Robe"], randomUUID()),
  new Character("Zelda", "Mage", 50, 50, 50, 25, ["Wisdom Staff", "Princess Cloth"], randomUUID()),
  new Character("Ganon", "Beast", 150, 100, 50, 75, ["Sword", "Gerudo Shield"], randomUUID()),
];

export class CharacterRepository implements Respository<Character>{
  
  public findAll(): Character[] | undefined {
      return characters;
  }

  public findOne(item: { id: string; }): Character | undefined {
    const character = characters.find(c => c.id === item.id);
    if(character)return character; //Asegurar q la ejecucion termine aca
  }

  public add(item: Character): Character | undefined {
      characters.push(item);
      return item;
  }

  public update(item: Character): Character | undefined {
    const character = characters.findIndex(c => c.id === item.id);
    if(character!==-1) return Object.assign(characters[character],item);
  }
  
  public delete(item: { id: string; }): Character | undefined {
    const index = characters.findIndex(c => c.id === item.id);
    if(index!==-1)
    {
    const character = characters[index];
    characters.splice(index,1);
    return character;
  }
  }
}