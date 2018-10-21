import { TestBed, inject } from '@angular/core/testing';

import { EditvegService } from './editveg.service';

describe('EditvegService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditvegService]
    });
  });

  it('should be created', inject([EditvegService], (service: EditvegService) => {
    expect(service).toBeTruthy();
  }));
});
