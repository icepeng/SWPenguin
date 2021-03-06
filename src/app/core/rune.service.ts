import { Injectable } from '@angular/core';
import { Rune } from './rune';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { MonsterIdName } from './monster-id-name';

@Injectable()
export class RuneService {
  setTable = ['X', '활력', '수호', '신속', '칼날', '격노', '집중', '인내', '맹공', 'X', '절망', '흡혈', 'X', '폭주', '응보', '의지', '보호', '반격', '파괴', '투지', '결의', '고양', '명중', '근성'];
  effTable = ['X', '깡체', '체퍼', '깡공', '공퍼', '깡방', '방퍼', 'X', '공속', '치확', '치피', '효저', '효적'];

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

  import(data): void {
    pushRune(data).then(list => {
      this.dataStore.runes = list;
      this._runes.next(Object.assign({}, this.dataStore).runes);
    })
  }

  value(rune, eff) {

  }

  maxValue(rune, eff) {

  }

  expectedValue(rune, eff) {

  }

  parseRune(rune: Rune) {
    return {
      occupied_name: MonsterIdName[`n${rune.occupied_master_id}`],
      set_id: this.setTable[rune.set_id],
      class: rune.class,
      slot_no: rune.slot_no,
      upgrade_curr: rune.upgrade_curr,
      pri_eff: `${this.effTable[rune.pri_eff[0]]} + ${rune.pri_eff[1]}`,
      prefix_eff: rune.prefix_eff[0] ? `${this.effTable[rune.prefix_eff[0]]} + ${rune.prefix_eff[1]}` : '',
      sec_eff_1: rune.sec_eff[0] ? `${this.effTable[rune.sec_eff[0][0]]} + ${rune.sec_eff[0][1]}` : '',
      sec_eff_2: rune.sec_eff[1] ? `${this.effTable[rune.sec_eff[1][0]]} + ${rune.sec_eff[1][1]}` : '',
      sec_eff_3: rune.sec_eff[2] ? `${this.effTable[rune.sec_eff[2][0]]} + ${rune.sec_eff[2][1]}` : '',
      sec_eff_4: rune.sec_eff[3] ? `${this.effTable[rune.sec_eff[3][0]]} + ${rune.sec_eff[3][1]}` : ''
    };
  }

}

function pushRune(data): Promise<Rune[]> {
  return new Promise((resolve, reject) => {
    let list = [];
    for (let rune of data.runes) {
      list.push(assignRune(rune, 0));
    }
    for (let unit of data.unit_list) {
      for (let rune of unit.runes) {
        list.push(assignRune(rune, unit.unit_master_id));
      }
    }
    resolve(list);
  });
}

function assignRune(rune, id) {
  return {
    id: rune.rune_id,
    occupied_id: rune.occupied_id,
    occupied_master_id: id,
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
