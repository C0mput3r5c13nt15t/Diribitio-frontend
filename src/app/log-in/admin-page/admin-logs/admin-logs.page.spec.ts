import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLogsPage } from './admin-logs.page';

describe('AdminLogsPage', () => {
  let component: AdminLogsPage;
  let fixture: ComponentFixture<AdminLogsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLogsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLogsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
