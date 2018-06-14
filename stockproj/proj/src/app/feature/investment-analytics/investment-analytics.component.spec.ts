import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentAnalyticsComponent } from './investment-analytics.component';

describe('InvestmentAnalyticsComponent', () => {
  let component: InvestmentAnalyticsComponent;
  let fixture: ComponentFixture<InvestmentAnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentAnalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
