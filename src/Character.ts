import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strenght: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  constructor(private _name: string) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(this._name, this._dexterity);
    this._archetype = new Mage(this._name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._defense = getRandomInt(1, 10);
    this._strenght = getRandomInt(1, 10);
    this._energy = { 
      type_: this._archetype.energyType, 
      amount: getRandomInt(1, 10), 
    };
  }

  get race(): Race { return this._race; }
  get archetype(): Archetype { return this._archetype; }
  get lifePoints(): number { return this._lifePoints; }
  get strength(): number { return this._strenght; }
  get defense(): number { return this._defense; }
  get dexterity(): number { return this._dexterity; }
  get energy(): Energy { return { ...this._energy }; }

  receiveDamage(atttackPoint: number): number {
    const damage = atttackPoint - this._defense;
    this._lifePoints -= damage > 0 ? damage : 1;
    if (this._lifePoints < 0) { this._lifePoints = -1; }
    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strenght);
  }

  levelUp(): void {
    const levelUpIncrement = getRandomInt(1, 10);
    this._strenght += levelUpIncrement;
    this._defense += levelUpIncrement;
    this._dexterity += levelUpIncrement;
    this._energy.amount = 10;
    this._maxLifePoints += levelUpIncrement;
    this._maxLifePoints = this._maxLifePoints > this._race.maxLifePoints 
      ? this._race.maxLifePoints : this._maxLifePoints;
    this._lifePoints = this._maxLifePoints;
  }

  // special(enemy: Fighter): void {
  //   enemy.receiveDamage(this._strenght * 2);
  // }
}

export default Character;