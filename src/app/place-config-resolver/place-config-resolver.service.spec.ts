import { TestBed, inject } from '@angular/core/testing';

import { PlaceConfigResolverService } from './place-config-resolver.service';

describe('PlaceConfigResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlaceConfigResolverService]
    });
  });

  it('should be created', inject([PlaceConfigResolverService], (service: PlaceConfigResolverService) => {
    expect(service).toBeTruthy();
  }));
});
