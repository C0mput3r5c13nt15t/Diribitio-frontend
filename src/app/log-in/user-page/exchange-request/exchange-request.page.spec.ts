import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeRequestPage } from './exchange-request.page';

describe('ExchangeRequestPage', () => {
  let component: ExchangeRequestPage;
  let fixture: ComponentFixture<ExchangeRequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeRequestPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeRequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
