import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingOptionComponent } from './listing-option.component';

describe('ListingOptionComponent', () => {
  let component: ListingOptionComponent;
  let fixture: ComponentFixture<ListingOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListingOptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListingOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
