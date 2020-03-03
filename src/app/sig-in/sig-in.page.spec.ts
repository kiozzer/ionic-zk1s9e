import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SigINPage } from './sig-in.page';

describe('SigINPage', () => {
  let component: SigINPage;
  let fixture: ComponentFixture<SigINPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigINPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SigINPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
