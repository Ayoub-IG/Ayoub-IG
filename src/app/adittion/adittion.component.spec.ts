import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdittionComponent } from './adittion.component';

describe('AdittionComponent', () => {
  let component: AdittionComponent;
  let fixture: ComponentFixture<AdittionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdittionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdittionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
