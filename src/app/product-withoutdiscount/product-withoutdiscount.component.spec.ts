import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductWithoutdiscountComponent } from './product-withoutdiscount.component';

describe('ProductWithoutdiscountComponent', () => {
  let component: ProductWithoutdiscountComponent;
  let fixture: ComponentFixture<ProductWithoutdiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductWithoutdiscountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductWithoutdiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
