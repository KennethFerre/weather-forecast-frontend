import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AemetComponent } from './aemet.component';

describe('AemetComponent', () => {
  let component: AemetComponent;
  let fixture: ComponentFixture<AemetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AemetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AemetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
