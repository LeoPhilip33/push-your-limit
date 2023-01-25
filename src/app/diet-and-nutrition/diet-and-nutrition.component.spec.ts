import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietAndNutritionComponent } from './diet-and-nutrition.component';

describe('DietAndNutritionComponent', () => {
  let component: DietAndNutritionComponent;
  let fixture: ComponentFixture<DietAndNutritionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DietAndNutritionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DietAndNutritionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
