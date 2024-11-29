import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeowComponent } from './heow.component';

describe('HeowComponent', () => {
  let component: HeowComponent;
  let fixture: ComponentFixture<HeowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
