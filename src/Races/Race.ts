abstract class Race {
  constructor(private _name: string, private _dexterity: number) {}

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  public get name() { return this._name; }

  public get dexterity() { return this._dexterity; }

  abstract get maxLifePoints(): number;
}

export default Race;