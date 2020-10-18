import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAdministrationPage } from './project-administration.page';

describe('ProjectAdministrationPage', () => {
  let component: ProjectAdministrationPage;
  let fixture: ComponentFixture<ProjectAdministrationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectAdministrationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectAdministrationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
