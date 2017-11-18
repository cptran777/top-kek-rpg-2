import { BaseCharacter } from '../base';

/**
 * @class BaseEnemyCharacter
 * @extends BaseCharacter
 * This class is the base model for an enemy character and contains the
 * methods necessary to interact with the player character in combat
 */
export class BaseEnemyCharacter extends BaseCharacter {
  constructor(name: string, hp: number, strength: number, defense: number) {
    super(name, 'enemy', hp, strength, defense);
  }

  /**
   * Enemy character performs an attack. The power of their attack is equal to
   * their base strength plus a random modifier
   * @method attack
   * @param playerLevel - The level of the player, helps in determining the
   *                      random modifier for the attack damage
   */
  attack(playerLevel: number): number {
    return this.strength + Math.floor(Math.random() * playerLevel * 1.1);
  }

  takeDamage(damage: number): boolean {
    const damageTaken = Math.max(damage - this.defense, 0);
    const newHP = Math.max(this.currentHP - damageTaken, 0);

    this.currentHP = newHP;

    return newHP === 0;
  }


}