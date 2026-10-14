import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaintenanceSummaryComponent } from './maintenance-summary';

describe('MaintenanceSummaryComponent', () => {
  let component: MaintenanceSummaryComponent;
  let fixture: ComponentFixture<MaintenanceSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaintenanceSummaryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MaintenanceSummaryComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
