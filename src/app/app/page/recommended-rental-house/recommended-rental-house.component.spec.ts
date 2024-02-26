import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedRentalHouseComponent } from './recommended-rental-house.component';

describe('RecommendedRentalHouseComponent', () => {
  let component: RecommendedRentalHouseComponent;
  let fixture: ComponentFixture<RecommendedRentalHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommendedRentalHouseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecommendedRentalHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
