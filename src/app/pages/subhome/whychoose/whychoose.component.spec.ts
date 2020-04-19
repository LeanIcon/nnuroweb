/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WhychooseComponent } from './whychoose.component';

describe('WhychooseComponent', () => {
  let component: WhychooseComponent;
  let fixture: ComponentFixture<WhychooseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhychooseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhychooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
