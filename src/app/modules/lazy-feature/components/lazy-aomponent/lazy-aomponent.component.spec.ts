import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyAomponentComponent } from './lazy-aomponent.component';

describe('LazyAomponentComponent', () => {
  let component: LazyAomponentComponent;
  let fixture: ComponentFixture<LazyAomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyAomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyAomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
