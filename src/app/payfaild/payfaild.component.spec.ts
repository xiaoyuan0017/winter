import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayfaildComponent } from './payfaild.component';

describe('PayfaildComponent', () => {
  let component: PayfaildComponent;
  let fixture: ComponentFixture<PayfaildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayfaildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayfaildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
