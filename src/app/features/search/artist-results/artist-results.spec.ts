import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistResults } from './artist-results.component';

describe('ArtistResults', () => {
  let component: ArtistResults;
  let fixture: ComponentFixture<ArtistResults>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtistResults]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistResults);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
