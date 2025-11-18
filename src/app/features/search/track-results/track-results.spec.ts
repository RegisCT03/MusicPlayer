import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackResults } from './track-results.component';

describe('TrackResults', () => {
  let component: TrackResults;
  let fixture: ComponentFixture<TrackResults>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackResults]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackResults);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
