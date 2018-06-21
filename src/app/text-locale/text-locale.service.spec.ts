import { TestBed, inject } from '@angular/core/testing';

import { TextLocaleService } from './text-locale.service';

describe('TextLocaleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TextLocaleService]
    });
  });

  it('should be created', inject([TextLocaleService], (service: TextLocaleService) => {
    expect(service).toBeTruthy();
  }));
});
