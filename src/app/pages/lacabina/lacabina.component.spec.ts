import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LacabinaComponent } from './lacabina.component';

describe('LacabinaComponent', () => {
  let component: LacabinaComponent;
  let fixture: ComponentFixture<LacabinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LacabinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LacabinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
