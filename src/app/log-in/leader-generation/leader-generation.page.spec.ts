import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderGenerationPage } from './leader-generation.page';

describe('LeaderGenerationPage', () => {
  let component: LeaderGenerationPage;
  let fixture: ComponentFixture<LeaderGenerationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaderGenerationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderGenerationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
