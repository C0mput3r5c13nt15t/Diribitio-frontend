import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminTokensPage } from './admin-tokens.page';

describe('AdminTokensPage', () => {
  let component: AdminTokensPage;
  let fixture: ComponentFixture<AdminTokensPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTokensPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminTokensPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
