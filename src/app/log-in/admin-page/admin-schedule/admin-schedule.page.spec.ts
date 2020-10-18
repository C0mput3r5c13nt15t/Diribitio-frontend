import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminSchedulePage } from './admin-schedule.page';

describe('AdminSchedulePage', () => {
  let component: AdminSchedulePage;
  let fixture: ComponentFixture<AdminSchedulePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSchedulePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminSchedulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
