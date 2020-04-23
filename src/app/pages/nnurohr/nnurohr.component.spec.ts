/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NnurohrComponent } from './nnurohr.component';

describe('NnurohrComponent', () => {
  let component: NnurohrComponent;
  let fixture: ComponentFixture<NnurohrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NnurohrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NnurohrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
