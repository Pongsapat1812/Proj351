import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsDComponent } from './icons-d.component';

describe('IconsDComponent', () => {
  let component: IconsDComponent;
  let fixture: ComponentFixture<IconsDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconsDComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconsDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
