import { Component, OnInit } from '@angular/core';
import { RuneListService } from '../rune-list.service';

@Component({
  selector: 'app-rune-filter',
  templateUrl: './rune-filter.component.html',
  styleUrls: ['./rune-filter.component.css']
})
export class RuneFilterComponent implements OnInit {
  eff_list = ['체력', '공격력', '방어력', '공속', '치확', '치피', '효적', '효저'];
  set_list = ['활력', '수호', '신속', '칼날', '격노', '집중', '인내', '맹공', '절망', '흡혈', '폭주', '응보', '의지', '보호', '반격', '파괴', '투지', '결의', '고양', '명중', '근성'];
  pri_list = ['깡체', '체력', '깡공', '공격력', '깡방', '방어력', '공속', '치확', '치피', '효저', '효적'];
  slot_list = ['1', '2', '3', '4', '5', '6'];

  constructor(
    private runeListService: RuneListService
  ) { }

  ngOnInit() {

  }

  toggleFilter(type, value) {
    this.runeListService.filter[type][value] = !this.runeListService.filter[type][value];
  }

}
