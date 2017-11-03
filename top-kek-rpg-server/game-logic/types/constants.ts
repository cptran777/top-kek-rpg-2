export interface Item {
  id: string;
  name: string;
  type: string;
  value: number;
}

export interface Weapon extends Item {
  power: number;
  position: string;
}

export interface Armor extends Item {
  power: number;
  position: string;
}

export type Equipment = Weapon | Armor;
export type Items = Item | Equipment;
export type Success = [boolean, string];