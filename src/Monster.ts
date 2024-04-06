import { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  constructor(private _lifePoints: number = 85, private _strenght: number = 63) {}

  get lifePoints() { return this._lifePoints; }
  get strength() { return this._strenght; }
  
  receiveDamage(attackPoints: number): number {
    this._lifePoints -= attackPoints;
    if (this._lifePoints <= 0) { this._lifePoints = -1; }
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strenght);
  }
}

export default Monster;