import { Component, OnInit } from '@angular/core';
import { RuneService } from '../../core/rune.service';
import { Rune, RuneSet, RuneEffect } from '../../core/rune';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-rune-filter',
  templateUrl: './rune-filter.component.html',
  styleUrls: ['./rune-filter.component.css']
})
export class RuneFilterComponent implements OnInit {
  setList = [RuneSet.Energy, RuneSet.Guard, RuneSet.Swift, RuneSet.Blade, RuneSet.Rage, RuneSet.Focus, RuneSet.Endure, RuneSet.Fatal, RuneSet.Despair, RuneSet.Vampire, RuneSet.Violent, RuneSet.Nemesis, RuneSet.Will, RuneSet.Shield, RuneSet.Revenge, RuneSet.Destroy, RuneSet.Fight, RuneSet.Determination, RuneSet.Enhance, RuneSet.Accuracy, RuneSet.Tolerance];
  effList = [RuneEffect.ScaleHP, RuneEffect.ScaleATK, RuneEffect.ScaleDEF, RuneEffect.SPD, RuneEffect.CRate, RuneEffect.CDmg, RuneEffect.ACC, RuneEffect.RES];
  priList = [RuneEffect.FlatHP, RuneEffect.ScaleHP, RuneEffect.FlatATK, RuneEffect.ScaleATK, RuneEffect.FlatDEF, RuneEffect.ScaleDEF, RuneEffect.SPD, RuneEffect.CRate, RuneEffect.CDmg, RuneEffect.ACC, RuneEffect.RES];
  slotList = [1, 2, 3, 4, 5, 6];
  setTable: string[];
  effTable: string[];
  filter: {
    'eff': boolean[],
    'set': boolean[],
    'pri': boolean[],
    'slot': boolean[]
  };
  subject = new Subject<any>();

  constructor(public runeService: RuneService) {
    this.setTable = runeService.setTable;
    this.effTable = runeService.effTable;
    this.filter = {
      'eff': Array(this.effList.length).fill(true),
      'set': Array(this.setList.length).fill(true),
      'pri': Array(this.priList.length).fill(true),
      'slot': Array(this.slotList.length).fill(true),
    };
  }

  ngOnInit() {

  }

  toggleFilter(type, value) {
    this.filter[type][value] = !this.filter[type][value];
    this.subject.next(this.filter);
  }

}
