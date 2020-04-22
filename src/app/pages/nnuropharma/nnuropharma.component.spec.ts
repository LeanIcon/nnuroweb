/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NnuropharmaComponent } from './nnuropharma.component';

describe('NnuropharmaComponent', () => {
  let component: NnuropharmaComponent;
  let fixture: ComponentFixture<NnuropharmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NnuropharmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NnuropharmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
