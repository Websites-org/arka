import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mpd } from './mpd';

describe('Mpd', () => {
  let component: Mpd;
  let fixture: ComponentFixture<Mpd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mpd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mpd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
