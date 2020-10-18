import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProjectsPage } from './admin-projects.page';

describe('AdminProjectsPage', () => {
  let component: AdminProjectsPage;
  let fixture: ComponentFixture<AdminProjectsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProjectsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProjectsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
