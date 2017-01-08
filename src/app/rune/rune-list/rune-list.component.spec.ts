/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RuneListComponent } from './rune-list.component';

describe('RuneListComponent', () => {
  let component: RuneListComponent;
  let fixture: ComponentFixture<RuneListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuneListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
