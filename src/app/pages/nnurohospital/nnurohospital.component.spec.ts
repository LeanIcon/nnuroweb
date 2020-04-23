/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NnurohospitalComponent } from './nnurohospital.component';

describe('NnurohospitalComponent', () => {
  let component: NnurohospitalComponent;
  let fixture: ComponentFixture<NnurohospitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NnurohospitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NnurohospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
