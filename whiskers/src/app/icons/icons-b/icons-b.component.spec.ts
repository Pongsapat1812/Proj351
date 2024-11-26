import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsBComponent } from './icons-b.component';

describe('IconsBComponent', () => {
  let component: IconsBComponent;
  let fixture: ComponentFixture<IconsBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconsBComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconsBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
