/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MonsterService } from './monster.service';

describe('MonsterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MonsterService]
    });
  });

  it('should ...', inject([MonsterService], (service: MonsterService) => {
    expect(service).toBeTruthy();
  }));
});
