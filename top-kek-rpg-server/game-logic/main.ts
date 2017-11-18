/**
 * Filename: top-kek-rpg-server/game-logic/main.ts
 *
 * The purpose of this file is to run a main game logic script
 */
import { BasePlayerCharacter } from './character/player/base';
import { BaseEnemyCharacter } from './character/enemy/base';

export default function main(): void {
  const player = new BasePlayerCharacter('Charlie', 10, 10, 5);
  player.attack();

  const enemies = [];

  for (let x = 0; x < 20; x++) {
    enemies.push(new BaseEnemyCharacter('blarg' + x, 3, 7, 3));
  }
}
