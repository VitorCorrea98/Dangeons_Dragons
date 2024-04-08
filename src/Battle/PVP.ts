import { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  constructor(private _player1: SimpleFighter, private _player2: SimpleFighter) {
    super(_player1);
    super.fight();
  }

  fight(): number {
    let playerDead = 0; 
    do {
      this._player1.attack(this._player2);
      this._player2.receiveDamage(this._player1.strength);
      if (this._player2.lifePoints <= 0) { playerDead = 1; }
      this._player2.attack(this._player1);
      this._player1.receiveDamage(this._player2.strength);
      if (this._player1.lifePoints <= 0) { playerDead = -1; }
    } while (playerDead === 0);

    return playerDead;
  }
}

export default PVP;