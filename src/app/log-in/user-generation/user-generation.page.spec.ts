import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserGenerationPage } from './user-generation.page';

describe('UserGenerationPage', () => {
  let component: UserGenerationPage;
  let fixture: ComponentFixture<UserGenerationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGenerationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserGenerationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
