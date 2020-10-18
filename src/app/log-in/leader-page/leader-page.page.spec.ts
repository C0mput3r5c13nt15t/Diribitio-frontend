import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderPagePage } from './leader-page.page';

describe('LeaderPagePage', () => {
  let component: LeaderPagePage;
  let fixture: ComponentFixture<LeaderPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaderPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
