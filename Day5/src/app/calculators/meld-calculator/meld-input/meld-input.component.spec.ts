import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeldInputComponent } from './meld-input.component';

describe('MeldInputComponent', () => {
  let component: MeldInputComponent;
  let fixture: ComponentFixture<MeldInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeldInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeldInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
