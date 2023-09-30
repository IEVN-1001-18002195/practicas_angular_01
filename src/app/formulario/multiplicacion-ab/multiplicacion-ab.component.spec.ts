import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplicacionAbComponent } from './multiplicacion-ab.component';

describe('MultiplicacionAbComponent', () => {
  let component: MultiplicacionAbComponent;
  let fixture: ComponentFixture<MultiplicacionAbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiplicacionAbComponent]
    });
    fixture = TestBed.createComponent(MultiplicacionAbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
