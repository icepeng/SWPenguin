import { Injectable } from '@angular/core';
import { Rune } from './rune';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class RuneService {
  runes: Observable<Rune[]>;
  _runes: BehaviorSubject<Rune[]>;
  dataStore: {
    runes: Rune[];
  }

  constructor() {
    this.dataStore = { runes: [] };
    this._runes = <BehaviorSubject<Rune[]>>new BehaviorSubject([]);
    this.runes = this._runes.asObservable();
  }

  import(data) {
    pushRune(data).then(list => {
      this.dataStore.runes = list;
      this._runes.next(Object.assign({}, this.dataStore).runes);
    })
  }

  get() {
    return this.runes;
  }

}

function pushRune(data): Promise<Rune[]> {
  return new Promise((resolve, reject) => {
    let list = [];
    for (let rune of data.runes) {
      list.push({
        id: rune.rune_id,
        occupied_id: rune.occupied_id,
        class: rune.class,
        pri_eff: rune.pri_eff,
        prefix_eff: rune.prefix_eff,
        sec_eff: rune.sec_eff,
        slot_no: rune.slot_no,
        set_id: rune.set_id,
        upgrade_curr: rune.upgrade_curr,
        rank: rune.rank
      });
    }
    for (let unit of data.unit_list) {
      for (let rune of unit.runes) {
        list.push({
          id: rune.rune_id,
          occupied_id: rune.occupied_id,
          class: rune.class,
          pri_eff: rune.pri_eff,
          prefix_eff: rune.prefix_eff,
          sec_eff: rune.sec_eff,
          slot_no: rune.slot_no,
          set_id: rune.set_id,
          upgrade_curr: rune.upgrade_curr,
          rank: rune.rank
        });
      }
    }
    resolve(list);
  });
}
