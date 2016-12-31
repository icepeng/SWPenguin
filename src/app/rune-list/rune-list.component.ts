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

  constructor(public runeService: RuneService) {
  }

  ngOnInit() {
      this.runeService.runes.subscribe(runes => {
        this.runes = runes;
      });
  }

}
