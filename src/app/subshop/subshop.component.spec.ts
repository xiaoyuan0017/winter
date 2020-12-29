import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubshopComponent } from './subshop.component';

describe('SubshopComponent', () => {
  let component: SubshopComponent;
  let fixture: ComponentFixture<SubshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
