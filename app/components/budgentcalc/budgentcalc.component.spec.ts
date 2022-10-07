import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgentcalcComponent } from './budgentcalc.component';

describe('BudgentcalcComponent', () => {
  let component: BudgentcalcComponent;
  let fixture: ComponentFixture<BudgentcalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgentcalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgentcalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
