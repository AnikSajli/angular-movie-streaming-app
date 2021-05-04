import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCastsComponent } from './movie-casts.component';

describe('MovieCastsComponent', () => {
  let component: MovieCastsComponent;
  let fixture: ComponentFixture<MovieCastsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieCastsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
