import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comments2Component } from './comments2.component';

describe('Comments2Component', () => {
  let component: Comments2Component;
  let fixture: ComponentFixture<Comments2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Comments2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Comments2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
