import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneradorQrComponent } from './generador-qr.component';

describe('GeneradorQrComponent', () => {
  let component: GeneradorQrComponent;
  let fixture: ComponentFixture<GeneradorQrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneradorQrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneradorQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
