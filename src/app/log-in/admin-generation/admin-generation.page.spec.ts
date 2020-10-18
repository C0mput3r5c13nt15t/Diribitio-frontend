import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminGenerationPage } from './admin-generation.page';

describe('AdminGenerationPage', () => {
  let component: AdminGenerationPage;
  let fixture: ComponentFixture<AdminGenerationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminGenerationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminGenerationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
