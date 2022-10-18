import { ComponentFixture, TestBed } from '@angular/core/testing';

import { H0meComponent } from './h0me.component';

describe('H0meComponent', () => {
  let component: H0meComponent;
  let fixture: ComponentFixture<H0meComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ H0meComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(H0meComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
