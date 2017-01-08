import { Injectable } from '@angular/core';

@Injectable()
export class RuneListService {
  filter: {
    slot: boolean[],
    focus: boolean[],
    pri_eff: boolean[],
    set: boolean[]
  };

  constructor() {
    this.filter = {
      slot: Array.from({ length: 6 }).map(x => false),
      focus: Array.from({ length: 8 }).map(x => false),
      pri_eff: Array.from({ length: 11 }).map(x => false),
      set: Array.from({ length: 21 }).map(x => false)
    };
  }

}
