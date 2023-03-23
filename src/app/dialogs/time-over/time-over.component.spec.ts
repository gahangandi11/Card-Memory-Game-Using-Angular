import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeOverComponent } from './time-over.component';

describe('TimeOverComponent', () => {
  let component: TimeOverComponent;
  let fixture: ComponentFixture<TimeOverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeOverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeOverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
