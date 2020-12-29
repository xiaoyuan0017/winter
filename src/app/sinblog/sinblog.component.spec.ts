import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinblogComponent } from './sinblog.component';

describe('SinblogComponent', () => {
  let component: SinblogComponent;
  let fixture: ComponentFixture<SinblogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinblogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
