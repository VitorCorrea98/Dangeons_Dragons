import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

export default interface Fighter {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy
  attack(enemy: SimpleFighter): void
  special?(enemy: SimpleFighter): void;
  levelUp(): void;
  receiveDamage(atttackPoint: number): number
}
