import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinproComponent } from './sinpro.component';

describe('SinproComponent', () => {
  let component: SinproComponent;
  let fixture: ComponentFixture<SinproComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinproComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
