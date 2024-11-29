import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaawanComponent } from './taawan.component';

describe('TaawanComponent', () => {
  let component: TaawanComponent;
  let fixture: ComponentFixture<TaawanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaawanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaawanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
