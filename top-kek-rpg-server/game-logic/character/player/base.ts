'use strict';

import { BaseCharacter } from '../base';
import { Items, Weapon, Armor, Equipment, Success } from '../../types/constants';
import { BASE_PLAYER_DAMAGE, INVENTORY_LIMIT } from '../constants';

interface EquippedItems {
  head: Armor;
  arm: Armor;
  legs: Armor;
  weapon: Weapon;
  [key: string]: Equipment;
}

/**
 * @class BasePlayerCharacter
 * @extends BaseCharacter
 * This class is the base model for the player created character and contains the properties and methods
 * necessary to store that character state and perform actions
 */
export class BasePlayerCharacter extends BaseCharacter {
  private inventory: Items[] = [];
  private equipped: EquippedItems = {
    head: {} as Armor,
    arm: {} as Armor,
    legs: {} as Armor,
    weapon: {} as Weapon
  };

  constructor(name: string, hp: number, strength: number, defense: number) {
    super(name, 'player', hp, strength, defense);
  }

  /**
   * Equips an item to the player character in the proper slot and returns the currently equipped item to the
   * inventory
   * @method equipItem
   * @param item {object} - Item should be an object of type Equipment
   * @returns {tuple} [success, message] - returns a tuple with the success of the equip item action and a
   *                  message if success is false. Success should be a boolean
   */
  equipItem(item: Equipment): Success {
    const currentEquippedItem = this.equipped[item.position];
    // Adding the old item to inventory so that equipping a new item doesn't just destroy the old one
    const inventorySuccess = this.addToInventory(currentEquippedItem);

    if (inventorySuccess[0]) {
      this.equipped[item.position] = item;
      return [true, ''];
    } else {
      return inventorySuccess;
    }
  }

  /**
   * Used for when the player picks up an item or when an equipped item they are replacing is returned to the
   * inventory
   * @method addToInventory
   * @param item {object} - item should be an object of type Items that describes the item
   * @returns {undefined}
   */
  addToInventory(item: Items): Success {
    const inventory = this.inventory;

    if (inventory.length >= INVENTORY_LIMIT) {
      return [false, 'Inventory is full'];
    }

    this.inventory.push(item);
    return [true, ''];
  }

  /**
   * Searches through the player inventory and removes the first found instance of a specified item. Returns false
   * if no instance of the item is found
   * @method removeFromInventory
   * @param item {object} - item should be an object of the type Items
   * @returns {boolean}
   */
  removeFromInventory(item: Items): boolean {
    const inventory = this.inventory;
    const inventorySize = inventory.length;

    for (let x = 0; x < inventorySize; x++) {
      const inventoryItem = inventory[x];

      if (inventoryItem.id === item.id) {
        inventory.splice(x, 1);
        return true;
      }
    }

    return false;
  }

  attack(): number {
    const weaponPower = this.equipped.weapon.power;
    return BASE_PLAYER_DAMAGE + this.strength + (weaponPower || 0);
  }
}