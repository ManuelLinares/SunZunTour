import { TestBed, inject } from '@angular/core/testing';

import { PlaceConfigService } from './place-config.service';

describe('PlaceConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlaceConfigService]
    });
  });

  it('should be created', inject([PlaceConfigService], (service: PlaceConfigService) => {
    expect(service).toBeTruthy();
  }));
});
