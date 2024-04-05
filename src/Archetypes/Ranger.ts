import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private _enregyType: EnergyType;
  static instances = 0;

  constructor(name: string) {
    super(name);
    this._enregyType = 'stamina';
    Ranger.instances += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger.instances; 
  }

  get name(): string {
    return super.name;
  }

  get energyType(): EnergyType {
    return this._enregyType;
  }
}

export default Ranger;