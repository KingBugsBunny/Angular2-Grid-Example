/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SortFormComponent } from './sort-form.component';

describe('SortFormComponent', () => {
  let component: SortFormComponent;
  let fixture: ComponentFixture<SortFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
