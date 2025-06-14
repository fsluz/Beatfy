import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticallyNavbar } from './horizontal-navbar';

describe('VerticallyNavbar', () => {
  let component: VerticallyNavbar;
  let fixture: ComponentFixture<VerticallyNavbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerticallyNavbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerticallyNavbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
