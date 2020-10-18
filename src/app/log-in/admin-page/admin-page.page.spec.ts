import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPagePage } from './admin-page.page';

describe('AdminPagePage', () => {
  let component: AdminPagePage;
  let fixture: ComponentFixture<AdminPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
