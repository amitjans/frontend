import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WooComponent } from './woo.component';

describe('WooComponent', () => {
  let component: WooComponent;
  let fixture: ComponentFixture<WooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WooComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
