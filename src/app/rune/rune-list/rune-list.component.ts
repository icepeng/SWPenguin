import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { RuneService } from '../../core/rune.service';
import { Rune } from '../../core/rune';
import { RuneFilterComponent } from '../rune-filter/rune-filter.component';

@Component({
  selector: 'app-rune-list',
  templateUrl: './rune-list.component.html',
  styleUrls: ['./rune-list.component.css']
})
export class RuneListComponent implements OnInit, AfterViewInit {
  @ViewChild(RuneFilterComponent)
  filter: RuneFilterComponent;

  runes: Rune[];
  items: any;
  parsedRunes: any;
  headers = [
    { name: "장착", field: "occupied_name" },
    { name: "세트", field: "set_id" },
    { name: "등급", field: "class" },
    { name: "슬롯", field: "slot_no" },
    { name: "강화", field: "upgrade_curr" },
    { name: "주옵션", field: "pri_eff" },
    { name: "접두옵션", field: "prefix_eff" },
    { name: "부옵션1", field: "sec_eff_1" },
    { name: "부옵션2", field: "sec_eff_2" },
    { name: "부옵션3", field: "sec_eff_3" },
    { name: "부옵션4", field: "sec_eff_4" },
  ]

  constructor(public runeService: RuneService) {
  }

  ngOnInit() {
    this.runeService.runes.subscribe(runes => {
      this.runes = runes;
      this.pushRunes(runes);
    });
  }

  ngAfterViewInit() {
    this.filter.subject.subscribe(filters => {
      this.pushRunes(
        this.runes.filter(rune => {
          return filters['pri'][rune.pri_eff[0]] && filters['slot'][rune.slot_no] && filters['set'][rune.set_id];
        })
      );
    });
  }

  pushRunes(runes: Rune[]) {
    this.parsedRunes = [];
    for (let rune of runes) {
      this.parsedRunes.push(this.runeService.parseRune(rune));
    }
    this.items = this.parsedRunes;
  }

}
