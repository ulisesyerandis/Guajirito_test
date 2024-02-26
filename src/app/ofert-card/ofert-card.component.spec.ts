import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertCardComponent } from './ofert-card.component';

describe('OfertCardComponent', () => {
  let component: OfertCardComponent;
  let fixture: ComponentFixture<OfertCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfertCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OfertCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
