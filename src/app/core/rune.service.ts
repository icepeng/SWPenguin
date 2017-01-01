import { Injectable } from '@angular/core';
import { Rune } from './rune';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const set_id_table = ['X', '활력', '수호', '신속', '칼날', '격노', '집중', '인내', '맹공', 'X', '절망', '흡혈', 'X', '폭주', '응보', '의지', '보호', '반격', '파괴', '투지', '결의', '고양', '명중', '근성'];
const eff_table = ['X', '깡체', '체퍼', '깡공', '공퍼', '깡방', '방퍼', 'X', '공속', '치확', '치피', '효저', '효적'];

@Injectable()
export class RuneService {
  runes: Observable<Rune[]>;
  _runes: BehaviorSubject<Rune[]>;
  parsedRunes: any;
  dataStore: {
    runes: Rune[];
  }

  constructor() {
    this.dataStore = { runes: [] };
    this._runes = <BehaviorSubject<Rune[]>>new BehaviorSubject([]);
    this.runes = this._runes.asObservable();
    this.runes.subscribe(runes => {
      this.parsedRunes = [];
      for (let rune of runes) {
        this.parsedRunes.push(parseRune(rune));
      }
    });
  }

  import(data) {
    pushRune(data).then(list => {
      this.dataStore.runes = list;
      this._runes.next(Object.assign({}, this.dataStore).runes);
    })
  }

}

function pushRune(data): Promise<Rune[]> {
  return new Promise((resolve, reject) => {
    let list = [];
    for (let rune of data.runes) {
      list.push(assignRune(rune));
    }
    for (let unit of data.unit_list) {
      for (let rune of unit.runes) {
        list.push(assignRune(rune));
      }
    }
    resolve(list);
  });
}

function parseRune(rune) {
  return {
    set_id: set_id_table[rune.set_id],
    class: rune.class,
    slot_no: rune.slot_no,
    upgrade_curr: rune.upgrade_curr,
    pri_eff: `${eff_table[rune.pri_eff[0]]} + ${rune.pri_eff[1]}`,
    prefix_eff: rune.prefix_eff[0] ? `${eff_table[rune.prefix_eff[0]]} + ${rune.prefix_eff[1]}` : '',
    sec_eff_1: rune.sec_eff[0] ? `${eff_table[rune.sec_eff[0][0]]} + ${rune.sec_eff[0][1]}` : '',
    sec_eff_2: rune.sec_eff[1] ? `${eff_table[rune.sec_eff[1][0]]} + ${rune.sec_eff[1][1]}` : '',
    sec_eff_3: rune.sec_eff[2] ? `${eff_table[rune.sec_eff[2][0]]} + ${rune.sec_eff[2][1]}` : '',
    sec_eff_4: rune.sec_eff[3] ? `${eff_table[rune.sec_eff[3][0]]} + ${rune.sec_eff[3][1]}` : ''
  };
}

function assignRune(rune) {
  return {
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
  };
}
