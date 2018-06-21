import { TestBed, inject } from '@angular/core/testing';

import { TripConfigService } from './trip-config.service';

describe('TripConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TripConfigService]
    });
  });

  it('should be created', inject([TripConfigService], (service: TripConfigService) => {
    expect(service).toBeTruthy();
  }));
});
