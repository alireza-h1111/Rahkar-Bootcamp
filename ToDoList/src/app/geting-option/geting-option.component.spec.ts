import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetingOptionComponent } from './geting-option.component';

describe('GetingOptionComponent', () => {
  let component: GetingOptionComponent;
  let fixture: ComponentFixture<GetingOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetingOptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetingOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
