export class BaseCharacter {
  hp: number;
  currentHP: number;
  strength: number;
  defense: number;
  type: string;
  name: string;

  constructor(name: string, type: string, hp: number, strength: number, defense: number) {
    this.name = name;
    this.type = type;
    this.hp = hp;
    this.currentHP = hp;
    this.strength = strength;
    this.defense = defense;
  }
}