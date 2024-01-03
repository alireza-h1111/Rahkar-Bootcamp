import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GettingOptionComponent } from './getting-option.component';

describe('GettingOptionComponent', () => {
  let component: GettingOptionComponent;
  let fixture: ComponentFixture<GettingOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GettingOptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GettingOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
