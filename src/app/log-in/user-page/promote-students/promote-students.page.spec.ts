import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PromoteStudentsPage } from './promote-students.page';

describe('PromoteStudentsPage', () => {
  let component: PromoteStudentsPage;
  let fixture: ComponentFixture<PromoteStudentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoteStudentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PromoteStudentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
