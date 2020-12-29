import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SublogComponent } from './sublog.component';

describe('SublogComponent', () => {
  let component: SublogComponent;
  let fixture: ComponentFixture<SublogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SublogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SublogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
