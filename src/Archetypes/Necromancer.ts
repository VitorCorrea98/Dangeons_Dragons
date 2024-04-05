import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _enregyType: EnergyType;
  static instances = 0;

  constructor(name: string) {
    super(name);
    this._enregyType = 'mana';
    Necromancer.instances += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.instances; 
  }

  get name(): string {
    return super.name;
  }

  get energyType(): EnergyType {
    return this._enregyType;
  }
}

export default Necromancer;