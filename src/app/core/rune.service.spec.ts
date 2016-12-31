/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RuneService } from './rune.service';

describe('RuneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RuneService]
    });
  });

  it('should ...', inject([RuneService], (service: RuneService) => {
    expect(service).toBeTruthy();
  }));
});
