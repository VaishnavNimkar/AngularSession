import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalaculatorsDashboardComponent } from './calaculators-dashboard.component';

describe('CalaculatorsDashboardComponent', () => {
  let component: CalaculatorsDashboardComponent;
  let fixture: ComponentFixture<CalaculatorsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalaculatorsDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalaculatorsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
