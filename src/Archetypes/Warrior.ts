import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _enregyType: EnergyType;
  static instances = 0;

  constructor(name: string) {
    super(name);
    this._enregyType = 'stamina';
    Warrior.instances += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior.instances; 
  }

  get name(): string {
    return super.name;
  }

  get energyType(): EnergyType {
    return this._enregyType;
  }
}

export default Warrior;