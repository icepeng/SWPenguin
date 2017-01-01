import { Component, OnInit } from '@angular/core';
import { RuneService } from '../core/rune.service';
import { Rune } from '../core/rune';

@Component({
  selector: 'app-rune-list',
  templateUrl: './rune-list.component.html',
  styleUrls: ['./rune-list.component.css']
})
export class RuneListComponent implements OnInit {

  runes: Rune[];
  items: string[];
  headers = [
    {name: "세트", field: "set_id"},
    {name: "등급", field: "class"},
    {name: "슬롯", field: "slot_no"},
    {name: "강화", field: "upgrade_curr"},
    {name: "주옵션", field: "pri_eff"},
    {name: "접두옵션", field: "prefix_eff"},
    {name: "부옵션", field: "sec_eff"},
  ]

  constructor(public runeService: RuneService) {
  }

  ngOnInit() {
      this.runeService.runes.subscribe(runes => {
        this.runes = runes;
      });
  }

}
