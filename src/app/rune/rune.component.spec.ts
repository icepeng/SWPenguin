/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RuneComponent } from './rune.component';

describe('RuneComponent', () => {
  let component: RuneComponent;
  let fixture: ComponentFixture<RuneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
