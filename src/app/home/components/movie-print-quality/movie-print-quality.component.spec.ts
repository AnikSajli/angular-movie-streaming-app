import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePrintQualityComponent } from './movie-print-quality.component';

describe('MoviePrintQualityComponent', () => {
  let component: MoviePrintQualityComponent;
  let fixture: ComponentFixture<MoviePrintQualityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviePrintQualityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviePrintQualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
