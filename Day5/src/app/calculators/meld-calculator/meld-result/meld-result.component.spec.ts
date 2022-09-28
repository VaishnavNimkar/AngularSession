import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeldResultComponent } from './meld-result.component';

describe('MeldResultComponent', () => {
  let component: MeldResultComponent;
  let fixture: ComponentFixture<MeldResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeldResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeldResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
