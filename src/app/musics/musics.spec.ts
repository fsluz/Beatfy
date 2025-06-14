import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Musics } from './musics';

describe('Musics', () => {
  let component: Musics;
  let fixture: ComponentFixture<Musics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Musics]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Musics);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
