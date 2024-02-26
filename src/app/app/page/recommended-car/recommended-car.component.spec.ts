import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedCarComponent } from './recommended-car.component';

describe('RecommendedCarComponent', () => {
  let component: RecommendedCarComponent;
  let fixture: ComponentFixture<RecommendedCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommendedCarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecommendedCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
