import { Injectable } from '@angular/core';
import { Monster } from './monster';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class RuneService {
  monsters: Observable<Monster[]>;
  _runes: BehaviorSubject<Monster[]>;
  dataStore: {
    monsters: Monster[];
  }

  constructor() {
    this.dataStore = { monsters: [] };
    this._runes = <BehaviorSubject<Monster[]>>new BehaviorSubject([]);
    this.monsters = this._runes.asObservable();
  }

  import(data) {
    pushRune(data).then(list => {
      this.dataStore.monsters = list;
      this._runes.next(Object.assign({}, this.dataStore).monsters);
    })
  }

  get() {
    return this.monsters;
  }

}

function pushRune(data): Promise<Monster[]> {
  return new Promise((resolve, reject) => {
    let list = [];
    for (let monster of data.unit_list) {
      list.push({
        id: monster.unit_id,
        atk: monster.atk,
        accuracy: monster.accuracy,
        def: monster.def,
        con: monster.con,
        critical_damage: monster.critical_damage,
        critical_rate: monster.critical_rate,
        speed: monster.speed,
        resist: monster.resist,
        level: monster.level,
        runes: monster.rune
      });
    }
    resolve(list);
  });
}
