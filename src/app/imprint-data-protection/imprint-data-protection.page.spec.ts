import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImprintDataProtectionPage } from './imprint-data-protection.page';

describe('ImprintDataProtectionPage', () => {
  let component: ImprintDataProtectionPage;
  let fixture: ComponentFixture<ImprintDataProtectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprintDataProtectionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImprintDataProtectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
