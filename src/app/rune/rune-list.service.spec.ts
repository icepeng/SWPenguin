/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RuneListService } from './rune-list.service';

describe('RuneListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RuneListService]
    });
  });

  it('should ...', inject([RuneListService], (service: RuneListService) => {
    expect(service).toBeTruthy();
  }));
});
