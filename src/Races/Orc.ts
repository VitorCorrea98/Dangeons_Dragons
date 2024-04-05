import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  static instances = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.instances += 1;
  }

  static createdRacesInstances(): number {
    return Orc.instances; 
  }

  public get dexterity(): number { return super.dexterity; }
  public get name(): string { return super.name; }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Orc;