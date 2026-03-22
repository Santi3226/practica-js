import crypto from 'node:crypto'

export class Character {
  public name: string;
  public characterClass: string;
  public level: number;
  public hp: number;
  public mana: number;
  public attack: number;
  public items: string[];
  public id: crypto.UUID;

  constructor(
    name: string,
    characterClass: string,
    level: number,
    hp: number,
    mana: number,
    attack: number,
    items: string[],
    id: crypto.UUID
  ) {
    this.name = name;
    this.characterClass = characterClass;
    this.level = level;
    this.hp = hp;
    this.mana = mana;
    this.attack = attack;
    this.items = items;
    this.id = id;
  }
}