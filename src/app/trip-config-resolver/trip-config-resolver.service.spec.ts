import { TestBed, inject } from '@angular/core/testing';

import { TripConfigResolverService } from './trip-config-resolver.service';

describe('TripConfigResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TripConfigResolverService]
    });
  });

  it('should be created', inject([TripConfigResolverService], (service: TripConfigResolverService) => {
    expect(service).toBeTruthy();
  }));
});
