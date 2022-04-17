import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Testing input as  1", () => {
    const cal = fixture.componentInstance;
    cal.pressNum(1);
    expect(cal.value1).toEqual(1);
  })
  
  it("Testing input as 15", () => {
    const cal = fixture.componentInstance;
    cal.pressNum(1);
    cal.pressNum(5);
    expect(cal.value1).toEqual(15);
  })
  
  it("Testing Root of 144", () => {
    const cal = fixture.componentInstance;
    cal.pressNum(1);
    cal.pressNum(4);
    cal.pressNum(4);
    cal.root()
    expect(cal.value1).toEqual(12);
  })
  
  it("Testing Factorial of 5", () => {
    const cal = fixture.componentInstance;
    cal.pressNum(5);
    cal.fact()
    expect(cal.value1).toEqual(120);
  })
  
  it("Testing Exponential of 7 to power 2", () => {
    const cal = fixture.componentInstance;
    cal.pressNum(7);
    cal.exp();
    cal.pressNum(2);
    cal.getAnswer()
    expect(cal.value1).toEqual(49);
  })
  
  it("Testing Log of 50", () => {
    const cal = fixture.componentInstance;
    cal.pressNum(5);
    cal.pressNum(0);
    cal.ln();
    expect(cal.value1).toEqual(3.912023005428146);
  })
});
