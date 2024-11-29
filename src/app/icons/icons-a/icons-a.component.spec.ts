import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsAComponent } from './icons-a.component';

describe('IconsAComponent', () => {
  let component: IconsAComponent;
  let fixture: ComponentFixture<IconsAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconsAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconsAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
