import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoryComponentComponent } from './factory-component.component';

describe('FactoryComponentComponent', () => {
  let component: FactoryComponentComponent;
  let fixture: ComponentFixture<FactoryComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactoryComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FactoryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
